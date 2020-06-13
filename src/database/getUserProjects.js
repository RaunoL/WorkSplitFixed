import firebaseApp from "../services/firebase/firebase"

const getUserProjects = async (currentUser) => {
    let userProjects = [];
    await firebaseApp
        .firestore()
        .collection("projects")
        .where("user", "==", currentUser)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let currentProject = [];
                currentProject.push(doc.data())
                currentProject.push(doc.id)
                userProjects.push(currentProject)
            })
        })
    return userProjects

}
export default getUserProjects