import React, {useState} from "react"
import updateSplitInfo from "../database/updateSplitInfo"
function UpdateSplit(props){
    const {splitId} = props
    const {name}= props
    const {due} = props
    const {setCurrentEdit} = props
    const {status} = props
    const {focusProject} = props
    const {notes} = props
    const [nameState, setNameState] = useState(name)
    const [dueState, setDueState] = useState(due)
    const [statusState, setStatusState] = useState(status)
    const [splitNotes, setSplitNotes] = useState(notes)
    const saveChanges = (e)=>{
        e.preventDefault()
        updateSplitInfo(nameState, dueState, splitId, statusState, focusProject, splitNotes)
        setCurrentEdit()
        
    }
    return(
        <form onSubmit={saveChanges}>
            <input name={"name"} type="text" value={nameState} onChange={(e)=> setNameState(e.target.value)} />

            <input name={"date"} type="date" value={dueState} onChange={(e)=> setDueState(e.target.value)} />
            <label htmlFor="notes">Notes</label>
            <textarea name={"notes"} value={splitNotes} onChange={(e)=> setSplitNotes(e.target.value)} />


            <input name={"checkBox"} type={"checkbox"} id={"complete"} checked={statusState} onChange={(e)=>setStatusState(e.target.checked)}/>
            <label htmlFor="complete">Mark as complete</label>
            <button className={"button"} type={"submit"}>Save</button>
        </form>
    )

}
export default UpdateSplit