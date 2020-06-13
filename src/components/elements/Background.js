import React from "react"
function Background(props){
    const {children} = props
    return(
    <div className={"background"}>{children}</div>
    )
}
export default Background