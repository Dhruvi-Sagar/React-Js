import {  signInWithPopup } from "firebase/auth"
import {googleAuthProvider, auth } from "./Firebase"


const Login = () => {
    const handleSubmit = async () => {
        try{
            let login = await signInWithPopup(auth,googleAuthProvider)
        }catch(err){
            console.log("err")
            return false;
        }
    } 
    return(
        <div className="login-container">
      <div className="login-box">
        <button className="login-button" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </div>
    )
}

export default Login