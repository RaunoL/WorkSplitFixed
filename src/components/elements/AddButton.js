import React from "react"
function AddButton(props){
    const {setScreenState} = props
    const changeToCreate = ()=> {setScreenState("Create")}
    return(
        <button onClick={changeToCreate} className={"addButton"}>New project</button>
           
    )
}

export default AddButton