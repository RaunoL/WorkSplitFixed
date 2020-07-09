import firebaseApp from "../services/firebase/firebase"
const deleteProject = async (id) => {
    await firebaseApp
        .firestore()
        .collection("projects")
        .doc(id)
        .delete()
        .then(() => {
            firebaseApp
                .firestore()
                .collection("projects")
                .doc(id)
                .collection("splits")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        firebaseApp
                            .firestore()
                            .collection("projects")
                            .doc(id)
                            .collection("splits")
                            .doc(doc.id)
                            .delete()
                    });
                })
        })
}
export default deleteProject