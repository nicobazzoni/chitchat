import firebase from 'firebase/app'
import "firebase/auth"


export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyAjYlJtDNTAs_x2vtXdTAct-abbicQkRuY",
  authDomain: "chat-35058.firebaseapp.com",
  projectId: "chat-35058",
  storageBucket: "chat-35058.appspot.com",
  messagingSenderId: "343729713549",
  appId: "1:343729713549:web:cbedb1875afa0f00188dc4"
}).auth();