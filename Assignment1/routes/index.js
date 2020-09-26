var express = require('express');
var router = express.Router();
const exerciseCtrl = require('../controllers/exerciseController');

/* GET home page. */
router.get('/', exerciseCtrl.index);


module.exports = router;
