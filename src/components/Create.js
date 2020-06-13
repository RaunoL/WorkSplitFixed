import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInput from "./elements/TextInput"
import NewSplitButton from "./elements/NewSplitButton"
import Button from "./elements/Button"
import newProject from "../database/newProject"
import FocusSplit from "./elements/FocusSplit"
import FocusWrapper from "./elements/FocusWrapper"
function Create(props) {
    const {setScreenState} = props
    const [splitList, setSplitList] = useState([])
    const [current, setCurrent] = useState({ name: "", due: "", status: false})

    const createProject = (e) => {
        e.preventDefault();
        const projectName = document.getElementById("projName").value;
        const dueDate = document.getElementById("dueDate").value;
        newProject(projectName, dueDate, splitList)
        .then(()=>{
            setScreenState("Main")
        })
    }
    const listItems = splitList.map((item, index) =>
        <FocusSplit splitList={splitList} setSplitList={setSplitList} key={index} name={item.name} due={item.due} id={ index} />
    )
    const addToList = (e) => {
        setSplitList(splitList.concat(current));
    }
    return (
        <FocusWrapper>
            <label htmlFor="projName">Project Name</label>
            <TextInput id={"projName"} />
            <label htmlFor="dueDate">Due date</label>
            <input type="date" id={"dueDate"} />
            <div id={"splitList"}>
                {listItems}
            </div>
            <label htmlFor="name">Split name</label>
            <input type="text" placeholder="Name" id="name" value={current.name} onChange={(e) => setCurrent({ ...current, name: e.target.value })} />
            <label htmlFor="due">Split due date</label>
            <input type="date" id="due" value={current.due} onChange={(e) => setCurrent({ ...current, due: e.target.value})} />
            <NewSplitButton action={addToList} />
            <Button id={"create"} action={createProject} text={"Create"} />
        </FocusWrapper>
    )
}
export default Create