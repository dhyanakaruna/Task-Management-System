const { registerUser, loginUser, getUserProfile } = require('../Controllers/AuthController');
const verifyToken = require('../Middleware/auth');
const router = require('express').Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, getUserProfile);

module.exports = router;
