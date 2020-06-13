import React from "react"
function DateInput(props){
    const {id} = props
    return(
        <input id={id} type="date"/>
    )
}
export default DateInput