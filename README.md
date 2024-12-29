To create the README in VSCode, you can follow these steps:

1. Open **VSCode**.
2. Navigate to your project folder (or create a new one if necessary).
3. In the **Explorer** view, right-click on the root folder and select **New File**.
4. Name the new file `README.md`.
5. Copy and paste the following content into the `README.md` file:

```markdown
# Task Management Application with JWT Authentication

## Overview
A task management application that allows users to log in and manage their tasks securely using JWT for authentication.

### Tech Stack
- **Backend**: Node.js with Express.js
- **Frontend**: React.js with Tailwind CSS for styling
- **Database**: MongoDB

## Features
- **User Registration**: Users can create an account by providing a username and password.
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
   JWT_SECRET=your_jwt_secret
   ```

4. **Set Up MongoDB**:
   - If you are using a local MongoDB instance, ensure it is running.
   - If you are using MongoDB Atlas, create a cluster and get the connection string. Update your database connection in the backend code accordingly.

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
   npm run build
   ```

### Step 4: Run the Application
1. **Navigate Back to the Backend Directory**:
   ```bash
   cd ../backend
   ```

2. **Start the Backend Server**: Run the following command to start the server:
   ```bash
   node app.js
   ```

3. **Access the Application**: Open your web browser and go to:
   ```txt
   http://localhost:3000/
   ```

### Step 5: Using the Application
1. **Log In**:
   - Enter the username and password.

3. **View Profile**:
   - After logging in, you can access the profile page to view your username and the task details.

## Troubleshooting
- **CORS Issues**: Ensure that CORS is properly configured in the backend to allow requests from your frontend.
- **Environment Variables**: Make sure the `.env` file is correctly set up and that you restart the server after making changes to it.

