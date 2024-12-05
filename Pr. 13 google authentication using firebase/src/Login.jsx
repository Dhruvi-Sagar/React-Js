import { signInWithPopup } from "firebase/auth";
import {googleAuthProvider,auth } from "./Firebase";


const Login = () => {
    const handleSubmit = async () =>
    {
        try{
            let login = await signInWithPopup(auth,googleAuthProvider)
        }
        catch(err){
            console.log("err");
            return false;
            
        }
    

    }
    return
    (
        <div>
            <button onClick={handleSubmit()}>Login</button>
        </div>
    )
} 
export default Login;