// external exports
const express = require('express');
const { getUsers } = require('../controller/usersController');

// create router
const router = express.Router();

router.get('/', getUsers)

module.exports = router;

