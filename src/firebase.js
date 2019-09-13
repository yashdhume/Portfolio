
import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAwNvo8ou75jrS6hdIrDhumNiyjzZBzyg8",
    authDomain: "portfolio-2d7bb.firebaseapp.com",
    databaseURL: "https://portfolio-2d7bb.firebaseio.com",
    projectId: "portfolio-2d7bb",
    storageBucket: "portfolio-2d7bb.appspot.com",
    messagingSenderId: "162068921980",
    appId: "1:162068921980:web:73c14a9c78e874a75893f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
db.settings({timestampsInSnapshots: true})
