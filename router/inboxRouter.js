const express = require('express');
const { getInbox } = require('../controller/inboxController');
const router = express.Router();

// get inbox page
router.get('/', getInbox)

module.exports = router;