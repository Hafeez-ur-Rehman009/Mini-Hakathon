import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAuNckDs3BCIypd5QVI3yaCGJ3Mgp0p14k",
    authDomain: "login-4d4a4.firebaseapp.com",
    projectId: "login-4d4a4",
    storageBucket: "login-4d4a4.appspot.com",
    messagingSenderId: "63449422828",
    appId: "1:63449422828:web:1bb0d13de114de01aefec9",
    measurementId: "G-ZWFGL9BF1V"
  };



const btn1 = document.getElementById("login2")
btn1.addEventListener('click',()=>{
const email1 = document.getElementById("email").value
const password1 = document.getElementById("password").value
const sign = document.getElementById("sign")    
    signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        window.location.href = "./index.html"
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert("Wrong Email and password");
        window.location.href = "./signup.html"
    });
})


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);