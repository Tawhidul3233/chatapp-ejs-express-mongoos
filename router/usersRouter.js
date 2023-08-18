// external exports
const express = require('express');


// internal imports
const { getUsers } = require('../controller/usersController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
const avatarUpload = require('../middleware/users/avatarUpload');
const { addUserValidators } = require('../middleware/users/userValidators');



// create router
const router = express.Router();

router.get('/',decorateHtmlResponse('Users'), getUsers);
router.post('/', avatarUpload, addUserValidators)

module.exports = router;

