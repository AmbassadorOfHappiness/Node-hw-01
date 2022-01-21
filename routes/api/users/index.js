const { Router } = require('express');
const { aggregation, repeatEmailForVerifyUser, uploadAvatar, verifyUser } = require('../../../controllers/users');
const guard = require('../../../midllewares/guard');
const upload = require('../../../midllewares/upload');
const roleAccess = require('../../../midllewares/role-access');
const {Role} = require('../../../config/constants');
const wrapperError = require('../../../midllewares/error-handler');

const router = new Router();

router.get('/stats/:id', guard, roleAccess(Role.ADMIN), wrapperError(aggregation));
router.patch('/avatar', guard, upload.single('avatar'), wrapperError(uploadAvatar));
router.get('/verify/:token', wrapperError(verifyUser));
router.post('/verify', wrapperError(repeatEmailForVerifyUser));

module.exports = router;