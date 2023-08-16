// external import
const express = require('express');

// internal import
const { getLogin } = require('../controller/loginController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');

// create router
const router = express.Router();

router.get('/',decorateHtmlResponse('Login'), getLogin)

module.exports = router;

