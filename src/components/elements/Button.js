import React from "react"
function Button(props) {
    const { id } = props
    const { action } = props
    const { text } = props
    return (
        <button className={"button"} id={id} onClick={action}>{text}</button>
    )
}
export default Button