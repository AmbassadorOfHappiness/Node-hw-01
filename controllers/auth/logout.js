const AuthService = require("../../service/auth");
const { HttpCode } = require("../../config/constants");

const authService = new AuthService();

const logout = async (req, res, next) => {
  await authService.setToken(req.user.id, null)

  res
    .status(HttpCode.NO_CONTENT)
    .json({ status: 'success', code: HttpCode.NO_CONTENT, data: {} })
}

module.exports = logout;