import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getStorage, ref, uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import {getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 

const firebaseConfig = {
    apiKey: "AIzaSyAuNckDs3BCIypd5QVI3yaCGJ3Mgp0p14k",
    authDomain: "login-4d4a4.firebaseapp.com",
    projectId: "login-4d4a4",
    storageBucket: "login-4d4a4.appspot.com",
    messagingSenderId: "63449422828",
    appId: "1:63449422828:web:1bb0d13de114de01aefec9",
    measurementId: "G-ZWFGL9BF1V"
  };
 
 const btn = document.getElementById("btn")
 btn.addEventListener('click',async()=>{



   const storage = getStorage();

   const file = document.getElementById("fileimg").files[0]
   
   
   
const storageRef = ref(storage, 'hafeez');

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  alert("upload");
});



     getDownloadURL(ref(storage, 'hafeez'))
     .then((url) => {
     
       const img = document.getElementById('myimg');
       img.setAttribute('src', url);
          
     })
     .catch((error) => {
       // Handle any errors
       console.log(error);
     });


     const name = document.getElementById("pname").value;
     const oldPass = document.getElementById("opass").value;
     const newPass = document.getElementById("npass").value;
     const repPass = document.getElementById("rpass").value;

     try {
        const docRef = await addDoc(collection(db, "hafeez"), {
          name : name,
          oldPass : oldPass,
          NewPass : newPass,
          RepPass : repPass
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})







// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const db = getFirestore(app);