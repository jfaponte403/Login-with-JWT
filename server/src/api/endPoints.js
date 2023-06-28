const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')

router.get('/ping', ping);

router.post('/login', login);

module.exports = router;