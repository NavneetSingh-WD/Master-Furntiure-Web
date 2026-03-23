const express = require('express');
const router = express.Router();

const controller = require('./cuntroller.employees');
const verifyToken = require('../../middleware/auth.middleware');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/change-password', verifyToken, controller.changePassword);
router.get('/profile', verifyToken, controller.getUserr);

module.exports = router;