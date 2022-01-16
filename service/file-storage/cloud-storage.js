const cloudinary = require('cloudinary').v2;
const {unlink} = require('fs/promises');
const {promisify} = require('util');
const {CLOUD_FOLDER_AVATARS} = require('../../config/constants');
const Users = require('../../repository/users/users');

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
  secure: true
});

class CloudStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.filePath = file.path;
    this.idAvatarCloud = user.idAvatarCloud;
    this.folderAvatar = CLOUD_FOLDER_AVATARS;
    this.uploadCloud = promisify(cloudinary.uploader.upload)
  }

  async save() {
    const {public_id: returnedIdAvatarCloud, secure_url: avatarUrl} = 
      await this.uploadCloud(this.filePath, {
        public_id: this.idAvatarCloud,
        folder: this.folderAvatar,
    })

    const newIdAvatarCloud = returnedIdAvatarCloud.replace(
      `${this.folderAvatar}/`,
      '',
    )
    
    await Users.updateAvatar(this.userId, avatarUrl, newIdAvatarCloud);
    await this.removeUploadFile(this.filePath)
    return avatarUrl;
  }

  async removeUploadFile(filePath) {
    try {
      await unlink(filePath)
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CloudStorage;