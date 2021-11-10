
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJf26_8lGLW_eGd84eL5EEoGSo4gFyg8A",
    authDomain: "ensteinbot-tuho.firebaseapp.com",
    databaseURL: "https://ensteinbot-tuho-default-rtdb.firebaseio.com",
    projectId: "ensteinbot-tuho",
    storageBucket: "ensteinbot-tuho.appspot.com",
    messagingSenderId: "938799392350",
    appId: "1:938799392350:web:d34cadf563c6ada4e9f6cf",
    measurementId: "G-WYQ1C3YY6V"
  };
  function adduser(){
      window.location = "kwitter_room.html";
      var cc = document.getElementById("user_name").value;
      localStorage.setItem(cc);
  
  }