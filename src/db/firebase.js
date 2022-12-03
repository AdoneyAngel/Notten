import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCQ5uQpVNM4hUCLBeP7ubGDpzURp0mE4pA",
    authDomain: "notten-374ca.firebaseapp.com",
    projectId: "notten-374ca",
    storageBucket: "notten-374ca.appspot.com",
    messagingSenderId: "931044391467",
    appId: "1:931044391467:web:7b051f8e58aa3ad62ec86e",
    measurementId: "G-2NW4VVFJMW"
  };

  
const app = initializeApp(firebaseConfig)

export default app