// external exports
const express = require('express');


// internal imports
const { getUsers, addUser } = require('../controller/usersController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
const avatarUpload = require('../middleware/users/avatarUpload');
const { addUserValidators, addUserValidationHandler } = require('../middleware/users/userValidators');



// create router
const router = express.Router();

router.get('/',decorateHtmlResponse('Users'), getUsers);
router.post('/', avatarUpload, addUserValidators, addUserValidationHandler, addUser)

module.exports = router;

