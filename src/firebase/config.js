import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAiec6g0RrCPp00yEQS6Yl8gsEzhz3klcc",
  authDomain: "olxclone-afe71.firebaseapp.com",
  projectId: "olxclone-afe71",
  storageBucket: "olxclone-afe71.appspot.com",
  messagingSenderId: "500661198700",
  appId: "1:500661198700:web:242b2b2c4516398dbc9d49",
  measurementId: "G-EFCCW3ZH5Q"
};

  export default firebase.initializeApp(firebaseConfig)