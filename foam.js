
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAuth ,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  import {
     doc, 
    setDoc,
    getDoc,
    getFirestore
   } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyC6LhzotT4QIiCUgm6U2fTXr3NcyZx_yn4",
    authDomain: "smit-assisgment-java-script.firebaseapp.com",
    projectId: "smit-assisgment-java-script",
    storageBucket: "smit-assisgment-java-script.appspot.com",
    messagingSenderId: "809089996440",
    appId: "1:809089996440:web:2cbfc490a2316e0b1762ed",
    measurementId: "G-FV518ERLB3"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();
  
  const registration_submit = document.getElementById("registration-submit").addEventListener("click",()=>{
  
  const  registration_email = document.querySelector("#registration-email")
  const  registration_password = document.querySelector("#registration-password")
  createUserWithEmailAndPassword(auth, registration_email .value,registration_password.value)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    await setDoc(doc(db, "user", user.uid), {
      email:registration_email.value,
      password:registration_password.value
  
    });

    const registration = document.getElementById("registration").style.display="none"
    const login = document.getElementById("login").style.display="block"
    //
    console.log(user);
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // ..
  });
  
  
  })
  
  const login_submit = document.getElementById("login-submit").addEventListener("click",()=>{
  
  const  login_email = document.querySelector("#login-email")
  const  login_password = document.querySelector("#login-password")
  
  signInWithEmailAndPassword(auth, login_email.value, login_password.value)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
   

    const docRef = doc(db, "user",user.uid);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
  if(docSnap.exists()) {
  let prnt = document.getElementById('print')
  prnt.innerHTML =`
  ${docSnap.data().email}</br>
  ${docSnap.data().password}
  `

  const login = document.getElementById("login").style.display="none"
  //

 
  } else {
  console.log("No such document!");
  }

  console.log(user);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
  
  
  
  })


//
//








  const login_open = document.getElementById("login-but").addEventListener("click",() => {

    const login = document.getElementById("login").style.display="block"
    const registration = document.getElementById("registration").style.display="none"


  })
  
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth();
//   const db = getFirestore();
//   const registration_submit = document.getElementById("registration-submit").addEventListener("click",()=>{

//     const  registration_email = document.querySelector("#registration-email").value
//     const  registration_password = document.querySelector("#registration-password").value

   
// createUserWithEmailAndPassword(auth, registration_email,registration_password )
//   .then(async(userCredential) => {
//     // Signed in 
//     const user = userCredential.user;

//     await setDoc(doc(db, "user", user.id), {
//         email: registration_email,
//         password: registration_password,
        
//       });

//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error);
//     // ..
//   });




//   })

//   const login_submit = document.getElementById("login-submit").addEventListener("click",() => {

//     const  login_email = document.querySelector("#login-email").value
//     const  login_password = document.querySelector("#login-password").value

//     signInWithEmailAndPassword(auth, login_email, login_password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       console.log(user);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(error)
//     });
  









//   })



