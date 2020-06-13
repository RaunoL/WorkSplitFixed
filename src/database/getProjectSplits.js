import firebaseApp from "../services/firebase/firebase"
const getProjectSplits = async (id)=>{
    let splits=[]
     await firebaseApp
        .firestore()
        .collection("projects")
        .doc(id)
        .collection("splits")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                splits.push (doc.data())
            })
        })
        
    return splits
}
export default getProjectSplits