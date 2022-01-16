const path = require('path');
const fs = require('fs/promises');
const Users = require('../../repository/users/users');

class LocalStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.filename = file.filename;
    this.filePath = file.path;
    this.folderAvatar = process.env.FOLDER_FOR_AVATARS;
  }

  async save() {
    const destination = path.join(this.folderAvatar, this.userId);
    await fs.mkdir(destination, {recursive: true});
    await fs.rename(this.filePath, path.join(destination, this.filename)); // avatars//userId//filename
    const avatarUrl = path.normalize(path.join(this.userId, this.filename)); // userId//filename
    await Users.updateAvatar(this.userId, avatarUrl);
    return avatarUrl;
  }
}

module.exports = LocalStorage;