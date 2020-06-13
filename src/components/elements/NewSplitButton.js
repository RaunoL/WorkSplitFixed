import React from "react"

function NewSplitButton(props){
    const {action} = props
    return(
        <div className={"newSplit"}>
            <button onClick={action}><i className={"fas fa-plus"}></i></button>
        </div>
    )
}

export default NewSplitButton