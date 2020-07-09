import React from "react"
import TextInput from "./elements/TextInput"
import PasswordInput from "./elements/PasswordInput"
import Button from "./elements/Button"
import firebaseApp from "../services/firebase/firebase"

function LoginForm(){
    const handleLogin = (e)=>{
        console.log(e);
        
        e.preventDefault();
        const { email, password } = e.target.elements;
        firebaseApp
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    }

    return(
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input className={"textInput"} type={"text"} name={"email"} id={"email"} />

            <label htmlFor="password">password</label>
            <input type={"password"} name={"password"} id={"password"}/>
            <Button id={"login"} text={"Log in"}></Button>
        </form>
    )
}
export default LoginForm