import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Sign";
import SignIn from "./Pages/Login";
import Home from "./Pages/Home";
import './App.css';


function App() {
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const loggedInUser = localStorage.getItem("isAuthenticated");

    if (loggedInUser) {
      setIsAuthenticated(true);
    }
  }, []);
   

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn users={users} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp setUsers={setUsers} />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;


