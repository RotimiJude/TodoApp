import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCjFznXK1X9QUxf9wruD234vH2lIpYqjtY",
    authDomain: "taskmaster-7eddf.firebaseapp.com",
    projectId: "taskmaster-7eddf",
    storageBucket: "taskmaster-7eddf.firebasestorage.app",
    messagingSenderId: "21566463901",
    appId: "1:21566463901:web:98825ba658468a12241974"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp

  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}
