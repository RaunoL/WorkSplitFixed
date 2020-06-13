import React from "react"
import TextInput from "./elements/TextInput"
import PasswordInput from "./elements/PasswordInput"
import Button from "./elements/Button"
import firebaseApp from "../services/firebase/firebase"
function SignupForm(){
    const handleSignup = (e)=>{
        e.preventDefault();
        const { email, password } = e.target.elements;
        firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)

    }
    return(
        <form onSubmit={handleSignup}>
            <label htmlFor="email">Email</label>
            <TextInput id={"email"}/>
            <label htmlFor="password">password</label>
            <PasswordInput id={"password"}/>
            <Button id={"singup"} text={"Sign up"}></Button>
        </form>
    )
}
export default SignupForm