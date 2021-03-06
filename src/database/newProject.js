import firebaseApp from "../services/firebase/firebase"
const newProject = async (name, due, splits) => {
    const currentUserId = firebaseApp.auth().currentUser.uid
    await firebaseApp.firestore().collection("projects").doc().set({
        projName: name,
        dueDate: due,
        user: currentUserId
    })
        .then(() => {
            firebaseApp
                .firestore()
                .collection("projects")
                .where("user", "==", currentUserId)
                .where("projName", "==", name)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(function (doc) {
                        splits.forEach((element, index) =>
                            firebaseApp.firestore().collection("projects").doc(doc.id).collection("splits").doc("split" + index).set({
                                name : element.name,
                                due : element.due,
                                status : element.status,
                                notes : ""
                            })
                        );

                    });
                })
        })
}

export default newProject