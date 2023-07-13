// external exports
const express = require('express');
const { getLogin } = require('../controller/loginController');

// create router
const router = express.Router();

router.get('/', getLogin)

module.exports = router;

