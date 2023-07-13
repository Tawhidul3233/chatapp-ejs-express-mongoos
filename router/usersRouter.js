// external exports
const express = require('express');
const { getUsers } = require('../controller/usersController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');

// create router
const router = express.Router();

router.get('/',decorateHtmlResponse('Users'), getUsers)

module.exports = router;

