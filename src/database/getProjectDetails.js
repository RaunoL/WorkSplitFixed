import firebaseApp from "../services/firebase/firebase"
const getProjectDetails = async (project) => {
    let ProjectDetails=[];
    await firebaseApp
        .firestore()
        .collection("projects")
        .doc(project)
        .get()
        .then((doc)=>{
            ProjectDetails.push(doc.data())
            ProjectDetails.push(doc.id)
        })

        
    
    return ProjectDetails

}
export default getProjectDetails