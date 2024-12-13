// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// function Sign({ users, setIsAuthenticated }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     const find = users.find((user) => user.username === username && user.password === password);
//     if (find) {
//       localStorage.setItem("isAuthenticated", "true"); 
//       setIsAuthenticated(true); 
//       navigate("/home");
//     } else {
//       alert("Invalid ");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="scard">
//         <h2>SIGN IN</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleSignIn}>Sign </button>
//         <p>
//           Don't  account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Sign;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Sign({ users, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const find = users.find((user) => user.username === username && user.password === password);
    if (find) {
      localStorage.setItem("isAuthenticated", "true"); 
      setIsAuthenticated(true); 
      navigate("/home");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="container" align="center">
      <div className="card">
        <h2>SIGN IN</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleSignIn}>Sign In</button>
        <p>
          Don't  account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Sign;

