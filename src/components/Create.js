import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInput from "./elements/TextInput"
import NewSplitButton from "./elements/NewSplitButton"
import Button from "./elements/Button"
import newProject from "../database/newProject"
import FocusSplit from "./elements/FocusSplit"
import FocusWrapper from "./elements/FocusWrapper"
function Create(props) {
    const { setScreenState } = props
    const [splitList, setSplitList] = useState([])
    const [current, setCurrent] = useState({ name: "", due: (new Date()).toISOString().split("T")[0], status: false })
    const createProject = (e) => {
        e.preventDefault()
        const projectName = document.getElementById("projName").value;
        const dueDate = document.getElementById("dueDate").value;
        newProject(projectName, dueDate, splitList)
            .then(() => {
                setScreenState("Main")
            })
    }
    const listItems = splitList.map((item, index) =>
        <FocusSplit splitList={splitList} setSplitList={setSplitList} key={index} name={item.name} due={item.due} id={index} />
    )
    const addToList = (e) => {
        e.preventDefault()

        setSplitList(splitList.concat(current));
    }
    return (
        <FocusWrapper>
            <form autoComplete="off" onSubmit={addToList}>
                <label htmlFor="name">Split name</label>
                <input name={"name"} type="text" placeholder="Name" id="name" value={current.name} onChange={(e) => setCurrent({ ...current, name: e.target.value })} />

                <label htmlFor="due">Split due date</label>
                <input name={"due"} type="date" id="due" value={current.due} onChange={(e) => setCurrent({ ...current, due: e.target.value })} />
                <NewSplitButton />
            </form>
            <div id={"splitList"}>
                {listItems}
            </div>
            <form onSubmit={createProject}>
                <label htmlFor="projName">Project Name</label>
                <input type="text" id={"projName"} name={"projName"} />
                

                <label htmlFor="dueDate" >Due date </label>
                <input name={"dueDate"} defaultValue={(new Date()).toISOString().split("T")[0]} type="date" id={"dueDate"} />



                <Button id={"create"} text={"Create"} />
            </form>
        </FocusWrapper>
    )
}
export default Create