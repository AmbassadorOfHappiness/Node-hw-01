const User = require("../../model/user/user");

const findById = async (id) => {
  return await User.findById(id)
}

const findByEmail = async (email) => {
  return await User.findOne({email})
}

const findByVerifyToken = async (verifyTokenEmail) => {
  return await User.findOne({verifyTokenEmail})
}

const create = async (body) => {
  const user = new User(body)
  return await user.save()
}

const updateToken = async (id, token) => {
  return await User.updateOne({_id: id}, {token})
}

const updateVerify = async (id, status) => {
  return await User.updateOne({_id: id}, {isVerify: status, verifyTokenEmail: null})
}


const updateAvatar = async (id, avatar, idAvatarCloud = null) => {
  return await User.updateOne({_id: id}, {avatar, idAvatarCloud})
}

module.exports = { 
  findById, 
  findByEmail,
  findByVerifyToken, 
  create, 
  updateToken,
  updateVerify,
  updateAvatar 
};