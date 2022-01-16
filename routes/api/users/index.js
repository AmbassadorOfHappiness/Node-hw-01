const { Router } = require('express');
const { aggregation, uploadAvatar } = require('../../../controllers/users');
const guard = require('../../../midllewares/guard');
const upload = require('../../../midllewares/upload');
const roleAccess = require('../../../midllewares/role-access');
const {Role} = require('../../../config/constants');

const router = new Router();

router.get('/stats/:id', guard, roleAccess(Role.ADMIN), aggregation);
router.patch('/avatar', guard, upload.single('avatar'), uploadAvatar);

module.exports = router;