import React, { useState,  } from "react";
import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"
import Button from "../components/elements/Button"
import FocusWrapper from "../components/elements/FocusWrapper"
import MainContainer from "../components/elements/Main"
import Container from "../components/elements/Container"
import Background from "../components/elements/Background"
function Login(props) {
    
    const [currentFrom, setCurrentForm] = useState(null)
    const toggleLogin = () => {
        setCurrentForm(LoginForm)
    }
    const toggleSignup = () => {
        setCurrentForm(SignupForm)
    }

    return (

        <Background>
            <Container>
                <MainContainer>
                    <FocusWrapper>
                        
                        
                        {currentFrom ? currentFrom : <div><Button id={"login"} action={toggleLogin} text={"Log in"} />
                        <Button id={"signup"} action={toggleSignup} text={"Sign up"} /></div>
                        
                        }
                    </FocusWrapper>
                </MainContainer>
            </Container>
        </Background>

    )
}
export default Login