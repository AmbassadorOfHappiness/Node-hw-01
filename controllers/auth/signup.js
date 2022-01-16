const authService = require("../../service/auth");
const { HttpCode } = require("../../config/constants");

// const authService = new AuthService();

const signup = async (req, res, next) => {
  try {
    const { email } = req.body;
    const isUserExist = await authService.isUserExist(email);
    if (isUserExist) {
      return res
      .status(HttpCode.CONFLICT)
      .json({ status: 'error', code: HttpCode.CONFLICT, message: 'Email in use' })
    }
    const data = await authService.create(req.body)
    res
      .status(HttpCode.CREATED)
      .json({ status: 'success', code: HttpCode.CREATED, data })
  } catch (error) {
    next(error);
  }
};

module.exports = signup;