import React, {useState} from "react"
import updateSplitInfo from "../database/updateSplitInfo"
function UpdateSplit(props){
    const {splitId} = props
    const {name}= props
    const {due} = props
    const {setCurrentEdit} = props
    const {status} = props
    const {focusProject} = props

    const [nameState, setNameState] = useState(name)
    const [dueState, setDueState] = useState(due)
    const [statusState, setStatusState] = useState(status)
    const saveChanges = (e)=>{
        e.preventDefault()
        updateSplitInfo(nameState, dueState, splitId, e.target.elements.complete.checked, focusProject)
        setCurrentEdit()
        
    }
    return(
        <form onSubmit={saveChanges}>
            <input type="text" value={nameState} onChange={(e)=> setNameState(e.target.value)}/>
            <input type="date" value={dueState} onChange={(e)=> setDueState(e.target.value)}/>
            
            <input type={"checkbox"} id={"complete"} checked={statusState} onChange={(e)=>setStatusState(e.target.checked)}/>
            <label htmlFor="complete">Mark as complete</label>
            <button className={"button"} type={"submit"}>Save</button>
        </form>
    )

}
export default UpdateSplit