import React, { useState, useEffect } from "react";
import ProjectItem from "../components/ProjectItem"
import AddButton from "./elements/AddButton"
import getUserProjects from "../database/getUserProjects"
import {AuthContext} from "../services/firebase/Auth"
import {useContext} from "react"

function Main(props) {
    const { setScreenState } = props
    const { setFocusProject } = props
    const currentUser = useContext(AuthContext)
    const [userProjects, setUserProjects] = useState([])
    useEffect(()=>{
        getUserProjects(currentUser.currentUser.uid).then((result) => {
            setUserProjects(result)
        })
    }, [])
    
    const Projects = userProjects.map((item, index) =>
        <ProjectItem setFocusProject={setFocusProject} setScreenState={setScreenState} key={index} name={item[0].projName} id={item[1]} />)
        
        return (
        <div>
            {Projects}
            <AddButton setScreenState={setScreenState} />
        </div>

    )
}
export default Main