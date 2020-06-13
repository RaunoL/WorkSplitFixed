import React from "react"
function FocusWrapper(props){
    const {children} = props
    return(
        <div className={"focusWrapper"}>
            {children}
        </div>
    )
}
export default FocusWrapper