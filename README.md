
# Task Management System

## Overview
A task management application that allows users to log in and manage their tasks securely using JWT for authentication.

### Tech Stack
- **Backend**: Node.js with Express.js
- **Frontend**: React.js with Tailwind CSS for styling
- **Database**: MongoDB

## Features
- **User Login**: Users can log in to their accounts using their credentials.
- **JWT Authentication**: 
  - Upon successful login, a JWT token is generated and sent to the client.
  - The token is used to authenticate subsequent requests to protected routes.
- **Profile Access**: Users can view their profile information after logging in.
- **Responsive Design**: The frontend is styled using Tailwind CSS for a modern and responsive user interface.

## Installation and Execution Guide

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: npm (Node Package Manager) is included with Node.js. You can check if it's installed by running `npm -v` in your terminal.
- **Git**: (Optional) If you want to clone the repository, ensure you have Git installed. You can download it from [git-scm.com](https://git-scm.com/).
- **MongoDB**: Ensure you have MongoDB installed locally or have access to a MongoDB cloud service like MongoDB Atlas.

### Step 1: Clone the Repository
If you have the project in a Git repository, clone it using the following command:
```bash
git clone <repository-url>
cd Task-Management-System/Task_Management
```

### Step 2: Set Up the Backend
1. **Navigate to the Backend Directory**:
   ```bash
   cd backend
   ```
   
2. **Install Backend Dependencies**: Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Create Environment Variables**: Create a `.env` file in the backend directory and add your JWT secret:
   ```txt
   JWT_SECRET="generate a jwt secret and paste here"
   ```

4. **Set Up MongoDB**:
   - In MongoDB Atlas, create a cluster and get the connection string. Update your database connection in the backend code accordingly.

### Step 3: Set Up the Frontend
1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```
   
2. **Install Frontend Dependencies**: Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Build the React App**: Create a production build of the React application:
   ```bash
   npm run dev
   ```

### Step 4: Run the Application
1. **Navigate Back to the Backend Directory**:
   ```bash
   cd ../backend
   ```

2. **Start the Backend Server**: Run the following command to start the server:
   ```bash
   npm start
   ```

3. **Access the Application**: Open your web browser and go to:
   ```txt
   http://localhost:3000/
   ```

### Step 5: Using the Application

1. **Log In**:
   - Enter the registered username and password.
   - Upon successful login, you will receive a JWT token.

3. **View Profile**:
   - After logging in, you can access the profile page to view your username.

## Troubleshooting
- **CORS Issues**: Ensure that CORS is properly configured in the backend to allow requests from your frontend.
- **Environment Variables**: Make sure the `.env` file is correctly set up and that you restart the server after making changes to it.
