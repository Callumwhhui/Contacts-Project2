var express = require('express');
var router = express.Router();

// create controller module 
const contactsCtrl = require('../controllers/contacts')

// get route for /contacts/new
router.get('/new', contactsCtrl.new);

router.post('/', contactsCtrl.create)

router.get('/', contactsCtrl.index);

router.get('/:id', contactsCtrl.show);

module.exports = router;
