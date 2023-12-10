// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithCustomToken } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzMFPQBYQ-XyKSDo59G9ar8U42u1ARo6c",
  authDomain: "handicrafts-main.firebaseapp.com",
  projectId: "handicrafts-main",
  storageBucket: "handicrafts-main.appspot.com",
  messagingSenderId: "265219279082",
  appId: "1:265219279082:web:f2a07b9fd0545bddabef93",
  measurementId: "G-DEGCV0ZSB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const auth = getAuth();
signInWithCustomToken(auth, token)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });


















// // New Registration code start
// document.getElementById("sign-up-btn") .addEventListener ("click", function () {
//   var email = document.getElementById("reg-email").value;
//   var password = document.getElementById("reg-pass").value;
//   console.log(email);
//   console.log(password);
//   // for new registration
//   createUserWithEmailAndPassword(auth, email, password)
//   .then( (userCredential)=> {
//   // Signed in
//     const user = userCredential.user;
//     console. log(user);
//     alert ("Registration successfully!!");
//   })
//   .catch((error)=> {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//     alert(error);
//   });
// });





// // login code
// document.getElementById("login").addEventListener("click", function() {
//   document.getElementById("login_email").value;
//   var password = document.getElementById("login_password").value;
//   signInWithEmailAndPassword(auth, email, password)
//   .then ((userCredential) => {
//     const user = userCredential.user;
//     console.log(user);
//     alert(user.email+" Login successfully!!!");
//     document. getElementById( 'logout ').style.display = 'block';
//   })
//   .catch((error) => {
//     const errorCode = error. code;
//     const errorMessage = error .message;
//     console.log(errorMessage);
//     alert(errorMessage);
//   });
// });




// // sign out code

// document.getElementById ("logout"). addEventListener ("click", function() {
//   signOut (auth). then (() => {
//     console.log('Sign-out successful. ');
//     alert ('Sign-out successful. ');
//     document.getElementById( 'logout').style.display='none';
//   })
//   .catch((error) => {
//     console.log("An error happened. ");
//   });
// });