const mongoose = require('mongoose');
const UserModel = require('./UserModel');

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
    .then(async () => {
        console.log('MongoDB is Connected...');
        
        // Seed default user
        const defaultUser = { username: 'admin', password: 'admin' };
        const existingUser = await UserModel.findOne({ username: defaultUser.username });
        if (!existingUser) {
            await UserModel.create(defaultUser);
            console.log('Default user created:', defaultUser);
        }
    })
    .catch((err) => {
        console.log('MongoDB Conn Error...', err);
    });
