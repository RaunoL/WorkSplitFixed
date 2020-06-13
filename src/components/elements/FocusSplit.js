import React from "react"
function FocusSplit(props) {
    const { name } = props
    const { due } = props
    const { id } = props
    const {setSplitList} = props
    const {splitList} = props

    const deleteSplit = (e)=>{
        // let newArray = splitList.splice(e.target.parentElement.id, 1);
        setSplitList(splitList.splice(e.target.parentElement.id, 1))
        console.log(splitList);
        
        // setSplitList(splitList.filter(split => !(split.id == e.target.parentElement.id)))
    }

        return (
            <div id={id} className={"split "}>
                <button onClick={deleteSplit}>{name}<br/> Due on {due}</button>
            </div>
        )

}
export default FocusSplit