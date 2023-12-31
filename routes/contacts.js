var express = require('express');
var router = express.Router();

// create controller module 
const contactsCtrl = require('../controllers/contacts')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// get route for /contacts/new
router.get('/new',ensureLoggedIn, contactsCtrl.new);

router.post('/',ensureLoggedIn, contactsCtrl.create)

router.get('/',ensureLoggedIn, contactsCtrl.index);

router.delete('/:id', contactsCtrl.delete);

router.get('/:id', contactsCtrl.show);

router.get('/:id/edit',ensureLoggedIn, contactsCtrl.edit);

router.put('/:id',ensureLoggedIn, contactsCtrl.update)

module.exports = router;
