import React from "react"
import deleteProject from "../database/deleteProject"
function DeleteProject(props){
    const {id} =props
    const {setScreenState} = props
    
    const deleteFromDB = (e)=>{
        
        deleteProject(e).then(()=>{
            setScreenState("Main")
        })
    }

    return(
        <button id={id} className={"deleteProject"} onClick={(e)=>{deleteFromDB(e.target.id)}} >Delete</button>
    )

}
export default DeleteProject