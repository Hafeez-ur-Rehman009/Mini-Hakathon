import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { collection, onSnapshot,addDoc, getFirestore, getDocs, deleteDoc, doc,query,where} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getStorage, ref, uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";




const firebaseConfig = {
    apiKey: "AIzaSyAuNckDs3BCIypd5QVI3yaCGJ3Mgp0p14k",
    authDomain: "login-4d4a4.firebaseapp.com",
    projectId: "login-4d4a4",
    storageBucket: "login-4d4a4.appspot.com",
    messagingSenderId: "63449422828",
    appId: "1:63449422828:web:1bb0d13de114de01aefec9",
    measurementId: "G-ZWFGL9BF1V"
  };




        const q = collection(db, "hafeez")
        const unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {

        document.getElementById("change").innerHTML = 
        `
        <a>${change.doc.data().firstName}</a>
        <a onclick="out()">Logout</a>
        `
          
          });
        });


        function out(){

            const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  window.location.href = "./index.html"
}).catch((error) => {
  // An error happened.
});
        }
        window.out = out



    

        const querySnapshot = await getDocs(collection(db, "hafeez"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        document.getElementById("show").innerHTML +=`
        
        <div class="container shadow p-3 mb-5 bg-body rounded" id="maincontainer" >
        <div class="row">
            <div class="col-lg-2">
                <img src="" id="myimg" style="border-radius: 10px;" width="120px"  alt="">
            </div>
            <div class="col-lg-2">
        
            </div>
            <div class="col-lg-8">
        <h4>${doc.data().Postname}</h4>
        <p style="font-size: small;">Abdul hafeez</p>
            </div>
        </div>
        
        <p style="font-size: small;">${doc.data().Postarea}</p>
        <br>
        <div class="row">
            <div class="col-lg-2">
                <p onclick="del('${doc.id}')" style="color: blue;">
                    Delete
                </p>
            </div>
            <div class="col-lg-2">
                <p style="color: blue;">
                    Edit
                </p>
            </div>
        </div>
        </div>
        
        `
        
        
        
        })

        async function del(id) {
            await deleteDoc(doc(db, "Hafeez", id));
            location.reload()
          } 
          window.del = del





    
    getDownloadURL(ref(storage, 'hafeez'))
    .then((url) => {
        
        console.log(url);
        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
    })
    .catch((error) => {
        // Handle any errors
        console.log(error);
    });


    const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);