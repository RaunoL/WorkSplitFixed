import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBluX_wy1ha8nvvBPCAi3M35Lhcp1T-8SA",
    authDomain: "web-dev-practical-218a8.firebaseapp.com",
    databaseURL: "https://web-dev-practical-218a8.firebaseio.com",
    projectId: "web-dev-practical-218a8",
    storageBucket: "web-dev-practical-218a8.appspot.com",
    messagingSenderId: "380781875179",
    appId: "1:380781875179:web:d200e6736ea5ed5b2c13ae"
});
export default firebaseApp