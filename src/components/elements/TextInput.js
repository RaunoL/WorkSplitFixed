import React from "react"
function TextInput(props){
    const {id} = props;
    return(
        <input className={"textInput"} type="text" id={id}/>
    )
}
export default TextInput