const express = require('express');
const { getInbox } = require('../controller/inboxController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
const router = express.Router();

// get inbox page
router.get('/',decorateHtmlResponse('Inbox'), getInbox)

module.exports = router;