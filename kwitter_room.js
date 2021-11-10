function logout(){
    window.location = "index.html";
    document.getElementById("user_name").innerHTML = "";
}

var firebaseConfig = {
      apiKey: "AIzaSyDau65NALLtWKhoZBUxr4z59YNwmkqK7o8",
      authDomain: "kwiter-4ebab.firebaseapp.com",
      databaseURL: "https://kwiter-4ebab-default-rtdb.firebaseio.com",
      projectId: "kwiter-4ebab",
      storageBucket: "kwiter-4ebab.appspot.com",
      messagingSenderId: "204276845935",
      appId: "1:204276845935:web:2b8b1a5074542a7775ec9a"
    };
   var cc = document.getElementById("user_name").value;
document.getElementById("welcome_user_name").innerHTML = "Welcome " +  cc ;
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addroom(){
        var valu = document.getElementById("room_name").value;
        firebase.database().ref("/").child(valu).update({
         purpose:"hello"
        });
         
        
    }


    
  