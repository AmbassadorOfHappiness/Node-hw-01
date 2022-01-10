const jwt = require('jsonwebtoken');
const { HttpCode } = require('../config/constants');
const repositoryUsers = require("../repository/users/users");

require('dotenv').config({ path: './config/.env' });
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken = (token) => {
  try {
    const verify = jwt.verify(token, SECRET_KEY)
    return !!verify
  } catch (e) {
    return false
  }
};

const guard = async (req, res, next) => {
  const token = req.get('authorization')?.split(' ')[1];
  const isValidToken = verifyToken(token);
  if (!isValidToken) {
    return res
    .status(HttpCode.UNAUTHORIZED)
    .json({ status: 'error', code: HttpCode.UNAUTHORIZED, message: 'Not authorized' })
  }
  const payload = jwt.decode(token);
  const user = await repositoryUsers.findById(payload.id);
  if (!user || user.token !== token) {
    return res
    .status(HttpCode.UNAUTHORIZED)
    .json({ status: 'error', code: HttpCode.UNAUTHORIZED, message: 'Not authorized' })    
  }
  req.user = user
  next();
}

module.exports = guard;