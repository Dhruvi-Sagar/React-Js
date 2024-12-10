import "./login.css"
import { auth, googleAuthProvider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleSubmit = async () => {
    try {
      let sign = await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.log("err");
      return false;
    }
  };

  return (
    <div className="login-container">
      <div className="login-box mb-3 mt-0" align="center" >
        <button className="login-button" onClick={() =>handleSubmit() }>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;    