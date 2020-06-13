import React, {useEffect} from "react"
import { useHistory } from "react-router-dom";
function ProjectItem(props){
    const {name} = props
    const {id} = props
    const {setScreenState} = props
    const {setFocusProject} = props
    let history = useHistory()
    
    const open = (e)=>{
        e.preventDefault()
    
        setFocusProject(e.target.id)
        setScreenState("Focus")
        
    }
    return(
        <button id={id} className={"projectItem"} onClick={open}>{name}</button>
    )
}
export default ProjectItem