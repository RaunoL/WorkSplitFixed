import React from "react"
function FocusSplit(props) {
    const { name } = props
    const { due } = props
    const { id } = props
    const { status } = props
    const { setCurrentEdit } = props

    const updateSplit = (e) => {
        setCurrentEdit({
            id: e.target.id,
            name: name,
            due: due,
            status: status
        })
    }
    if (status) {
        return (
            <div  className={"split complete"}>
                <button id={"split" + id} onClick={updateSplit}>{name}<br/> Due on {due}</button>
            </div>)
    }
    else {
        return (
            <div className={"split "}>
                <button id={"split" + id} onClick={updateSplit}>{name}<br/> Due on {due}</button>
            </div>
        )
    }

}
export default FocusSplit