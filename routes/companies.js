const express = require('express')
const router = express.Router();
const companiesCtrl = require('../controllers/companies');

// all routes start at '/' (root)

router.post('/contacts/:id/companies', companiesCtrl.create);


module.exports = router;