import React, { useState } from "react"
import MainMenu from "../components/MainMenu"
import Create from "../components/Create"
import Focus from "../components/Focus"
import Header from "../components/Header"
import MainContainer from "../components/elements/Main"
import Container from "../components/elements/Container"
import Background from "../components/elements/Background"
function Main() {
    const [screenState, setScreenState] = useState("Main")
    const [focusProject, setFocusProject] = useState("")
    
    return (
        <Background>
            <Container>
                <Header setScreenState={setScreenState}/>
                <MainContainer>
                    <div>
                        {screenState == "Create"
                        ? <Create setScreenState={setScreenState} />
                        : screenState == "Focus"
                            ? <Focus focusProject={focusProject} setScreenState={setScreenState} />
                            : <MainMenu setFocusProject={setFocusProject} setScreenState={setScreenState} />
                        }
                    </div>
                </MainContainer>
            </Container>
        </Background>


    )
}
export default Main