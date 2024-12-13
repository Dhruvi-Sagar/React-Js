// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup({ setUsers }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const handleSignUp = () => {
//     if (username && password && email) {
//       const newUser = { username, password, email };
//       const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//       storedUsers.push(newUser);
//       localStorage.setItem("users", JSON.stringify(storedUsers));
//       setUsers(storedUsers); 
//       navigate("/"); 
//     } else {
//       alert("Please all fields.");
//     }
//   };

//   return (
//     <div>
//       <h2>SIGNUP </h2>
//       <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//       <button onClick={handleSignUp}>Sign Up</button>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign.css"; // Ensure you import the CSS file

function Signup({ setUsers }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && password && email) {
      const newUser = { username, password, email };
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      setUsers(storedUsers); 
      navigate("/"); 
    } else {
      setErrorMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="container" align="center">
      <div className="card">
        <h2>SIGN UP</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
