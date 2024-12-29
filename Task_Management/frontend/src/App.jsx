import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import TaskManager from "./TaskManager";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="App">
        {!token ? (
          <Routes>
            <Route
              path="/login"
              element={<Login setToken={setToken} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <div className="flex justify-center items-center h-screen">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold text-center mb-6">Welcome to Task Manager</h1>
                    <div className="flex justify-center space-x-4">
                      <Link
                        to="/login"
                        className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        ) : (
          <>
            <Profile token={token} />
            <TaskManager />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
