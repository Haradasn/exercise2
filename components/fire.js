import firebase from 'firebase'

// ☆各プロジェクトの設定を記述
const firebaseConfig = {
    apiKey: "AIzaSyDQaxHK0I77RWdvqcsJPkfhyj5_rvxwpvo",
    authDomain: "haradasn-react.firebaseapp.com",
    projectId: "haradasn-react",
    databaseURL: "haradasn-react.firebaseio.com",
    storageBucket: "haradasn-react.appspot.com",
    messagingSenderId: "29521214597",
    appId: "1:29521214597:web:e5deea110949a43ae7bdec"
  };

  if(firebase.apps.length == 0) {
      firebase.initializeApp(firebaseConfig)
  }