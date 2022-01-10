const express = require("express");
const router = express.Router();
const {
  currentUser,
  login,
  logout,
  signup
} = require("../../../controllers/auth");
const guard = require("../../../midllewares/guard");

router.get('/current', guard, currentUser);
router.post('/login', login);
router.post('/logout', guard, logout);
router.post('/signup', signup);

module.exports = router;