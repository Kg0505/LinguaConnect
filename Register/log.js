const firebaseConfig = {
    apiKey: "AIzaSyDZyeIhwpJezfL53Ni4PB3xclSSPQ1K1Ng",
    authDomain: "ling-1499c.firebaseapp.com",
    databaseURL: "https://ling-1499c-default-rtdb.firebaseio.com",
    projectId: "ling-1499c",
    storageBucket: "ling-1499c.appspot.com",
    messagingSenderId: "792061979875",
    appId: "1:792061979875:web:1b4cf85f55b32912f7a9d6",
    measurementId: "G-GPTR5WFYYN"
  };
  firebase.initializeApp(firebaseConfig);
 const logDb=firebase.database().ref("login");
 document.getElementById("Login").addEventListener("submit",subfun);
  
 function subfun(e){
    e.preventDefault();
    var name=getElementval("name");
    var email=getElementval("email");
    var password=getElementval("password");
    var lang=getElementval("languages");
    console.log(name,email,password,lang);

 }
 const getElementval=(id)=>{
    return document.getElementById(id).value;
 }