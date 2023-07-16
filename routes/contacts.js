var express = require('express');
var router = express.Router();

// create controller module 
const contactsCtrl = require('../controllers/contacts.js')

// get route for /contacts/new
router.get('/new', contactsCtrl.new);

router.post('/', contactsCtrl.create)

router.get('/', contactsCtrl.index);

module.exports = router;
