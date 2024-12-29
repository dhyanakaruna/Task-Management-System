import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import TaskManager from "./TaskManager";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      {token ? (
        <>
          <Profile token={token} />
          <TaskManager />
        </>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;
