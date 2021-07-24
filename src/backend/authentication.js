import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBvFya5fOAKAhHMT1DefMkjy910FvgwCBM",
    authDomain: "notistic-e6d12.firebaseapp.com",
    projectId: "notistic-e6d12",
    storageBucket: "notistic-e6d12.appspot.com",
    messagingSenderId: "317515499280",
    appId: "1:317515499280:web:368a3e4551d9af85c18795"
  };
  const app=firebase.initializeApp(firebaseConfig);
  export default app;
  export const auth=app.auth();