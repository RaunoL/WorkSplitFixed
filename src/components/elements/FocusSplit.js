import React from "react"
function FocusSplit(props) {
    const { name } = props
    const { due } = props
    const { id } = props
    const {setSplitList} = props
    const {splitList} = props

    const deleteSplit = (e)=>{
        var array = [...splitList]
        array.splice(e.target.parentElement.id, 1)
        setSplitList(array)
    }

        return (
            <div id={id} className={"split createSplit"}>
                <button onClick={deleteSplit}>{name}<br/> Due on {due}</button>
            </div>
        )

}
export default FocusSplit