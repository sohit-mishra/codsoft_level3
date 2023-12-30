const express = require('express')
const {home , register} = require('../controller/auth-controller')
const forgotpassword = require('../controller/forgotpassword')
const login = require('../controller/login')
const updatepassword = require('../controller/updatepassword')
const router = express.Router()

router.get('/', home);
router.post('/register', register);
router.post('/login', login);
router.post('/updatepassword', updatepassword);
router.post('/forgotpassword', forgotpassword);


module.exports = router;