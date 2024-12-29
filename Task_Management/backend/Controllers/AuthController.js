const UserModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to register user', success: false });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials', success: false });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', success: true, token });
    } catch (err) {
        res.status(500).json({ message: 'Failed to log in', success: false });
    }
};

const getUserProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await UserModel.findById(userId, { password: 0 }); // Exclude password
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        res.status(200).json({ message: 'User profile fetched', success: true, data: user });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch profile', success: false });
    }
};

module.exports = { registerUser, loginUser, getUserProfile };
