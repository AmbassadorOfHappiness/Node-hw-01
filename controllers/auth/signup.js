const authService = require("../../service/auth");
const { HttpCode } = require("../../config/constants");
const {EmailService, SenderNodemailer, SenderSendgrid} = require('../../service/email');
const { CustomError } = require('../../config/custom-error');

const signup = async (req, res, next) => {
  const { email } = req.body;
  const isUserExist = await authService.isUserExist(email);
  if (isUserExist) {
    throw new CustomError(HttpCode.CONFLICT, 'Email is already exist');
  }
  const userData = await authService.create(req.body)
  const emailService = new EmailService(process.env.NODE_ENV, new SenderSendgrid());

  const isSend = await emailService.sendVerifyEmail(
    email,
    userData.name, 
    userData.verifyTokenEmail
  )
  delete userData.verifyTokenEmail;

  res
    .status(HttpCode.CREATED)
    .json({ 
      status: 'success', 
      code: HttpCode.CREATED, 
      data: {...userData, isSendEmailVerify: isSend}, 
    })
};

module.exports = signup;