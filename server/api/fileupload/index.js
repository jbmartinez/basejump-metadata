'use strict';

var multer = require('multer');
var upload = multer();
var express = require('express');
var controller = require('./fileupload.controller');

var router = express.Router();

router.post('/', upload.single('attachment'), controller.parse);

module.exports = router;
