import firebaseApp from "../services/firebase/firebase"
const deleteProject = async (id) => {
    console.log(id)
    await firebaseApp
        .firestore()
        .collection("projects")
        .doc(id)
        .delete()
        .then(()=>{
            firebaseApp
            .firestore()
            .collection("projects")
            .doc(id)
            .collection(id)
            .doc("splits")
            .delete()
        })
}
export default deleteProject