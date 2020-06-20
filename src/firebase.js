import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBJVwJHX-yuFxG4_jYPUi_jlPDn5PMIyTo",
    authDomain: "rolling-store-av-259fe.firebaseapp.com",
    databaseURL: "https://rolling-store-av-259fe.firebaseio.com",
    projectId: "rolling-store-av-259fe",
    storageBucket: "rolling-store-av-259fe.appspot.com",
    messagingSenderId: "728730328016",
    appId: "1:728730328016:web:afa6c5a0da3915d903b7d5"
};
firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase;

export { firebaseApp };
