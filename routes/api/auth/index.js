const express = require("express");
const router = express.Router();
const {
  currentUser,
  login,
  logout,
  signup
} = require("../../../controllers/auth");
const guard = require("../../../middlewares/guard");
const wrapperError = require('../../../middlewares/error-handler');

router.get('/current', guard, wrapperError(currentUser));
router.post('/login', wrapperError(login));
router.post('/logout', guard, wrapperError(logout));
router.post('/signup', wrapperError(signup));

module.exports = router;