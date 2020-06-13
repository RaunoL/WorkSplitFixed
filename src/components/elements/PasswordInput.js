import React from "react"
function PasswordInput(props){
    const {id} = props
    return (
        <input type="password" id={id}/>
    )
}
export default PasswordInput