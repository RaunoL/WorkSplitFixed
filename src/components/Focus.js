import React, { useState, useEffect } from "react";
import FocusHeader from "./elements/FocusHeader"
import EditSplit from "../components/EditSplit"
import FocusWrapper from "./elements/FocusWrapper"
import getProjectDetails from "../database/getProjectDetails"
import getProjectSplits from "../database/getProjectSplits"
import UpdateSplit from "../components/UpdateSplit"
import DeleteProject from "../components/DeleteProject"
function Focus(props) {
    const {focusProject} = props
    const {setScreenState} = props
    const [projName, setProjName] = useState("loading")
    const [dueDate, setDueDate] = useState("loading")
    const [splits, setSplits] = useState([])
    const [currentEdit, setCurrentEdit] = useState()
    useEffect(()=>{
        console.log(splits)
        getProjectDetails(focusProject).then((result) => {
            setProjName(result[0].projName)
            setDueDate(result[0].dueDate)
            getProjectSplits(result[1])
            .then((splitsResult)=>{
                setSplits(splitsResult)
            })
            
        })
    }, [currentEdit])
    
    const splitList = splits.map((split, index) =>
        <EditSplit 
        status={split.status} 
        currentEdit={currentEdit} 
        setCurrentEdit={setCurrentEdit} 
        key={index} 
        name={split.name} 
        due={split.due} 
        id={index} />
    )
    return (
        <FocusWrapper>
            <FocusHeader projName={projName} dueDate={dueDate} />
            {(currentEdit) ? <UpdateSplit focusProject={focusProject} splitId={currentEdit.id} setCurrentEdit={setCurrentEdit} name={currentEdit.name} due={currentEdit.due} status={currentEdit.status}></UpdateSplit> : 
            <div>
                {splitList}
            </div>
}
        <DeleteProject setScreenState={setScreenState} id={focusProject}/>
        </FocusWrapper>
    )
}
export default Focus