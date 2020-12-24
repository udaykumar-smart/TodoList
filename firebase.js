import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDp5Z6VKKtnDis6j3UgM9grcej6mXGXJx0",
  authDomain: "todo-idexcel.firebaseapp.com",
  databaseURL: "https://todo-idexcel-default-rtdb.firebaseio.com/",
  projectId: "todo-idexcel",
  storageBucket: "todo-idexcel.appspot.com",
  messagingSenderId: "646317961316",
  appId: "1:646317961316:web:3578354668b7c00c4f6f71"
 };  
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);


export default fireDb.database().ref();


