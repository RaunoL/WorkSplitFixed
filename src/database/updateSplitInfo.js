import firebaseApp from "../services/firebase/firebase"
const updateSplitInfo = async (name, due, id, status, project, notes) => {
    console.log(notes);
    
    await firebaseApp
        .firestore()
        .collection("projects")
        .doc(project)
        .collection("splits")
        .doc(id)
        .update({
            due: due,
            name: name,
            status: status,
            notes: "" + notes
        })
}
export default updateSplitInfo