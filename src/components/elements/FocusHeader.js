import React from "react"

function FocusHeader(props) {
    const { projName } = props;
    const { dueDate } = props;

    return (
        <div className={"focusHeader"}>
            <h3>{projName}</h3>
            <h4>Due: {dueDate}</h4>
        </div>
    )
}
export default FocusHeader