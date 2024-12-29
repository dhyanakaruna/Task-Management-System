const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');  // Ensure this is correctly importing the DB connection
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/TaskRouter');
const AuthRouter = require('./Routes/AuthRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/tasks', TaskRouter);
app.use('/auth', AuthRouter);

app.get('/', (req, res) => {
    res.send('Hello from the server');
});

// Server Listening
app.listen(PORT, () => {
    console.log(`Server is running on PORT =${PORT}`);
});
