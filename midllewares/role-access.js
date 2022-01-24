const { HttpCode } = require('../config/constants');
const { FORBIDDEN } = require('../config/messages');

const guard = (role) => async (req, res, next) => {
  const roleCurrentUser = req.user.role;
  if (roleCurrentUser !== role) {
    return res
    .status(HttpCode.FORBIDDEN)
      .json({
        status: 'error',
        code: HttpCode.FORBIDDEN,
        message: FORBIDDEN[req.app.get('lang')],
      })
  }

  next();
}

module.exports = guard;