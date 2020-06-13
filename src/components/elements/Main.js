import React from "react";
function Main(props){
    const {children} = props
    return(
        <div className={"main"}>
            {children}
        </div>
    )
}

export default Main