var express = require('express')
var router = express.Router()
const controller = require('./school.controller');

router.get('/', controller.index)
// router.post('/convertCertificate', controller.index)
router.post('/', controller.create)


module.exports = router;