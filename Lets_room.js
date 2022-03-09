
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAIQ4xPlDhTf7Qw_tIpmLUdshHWrZsOGFE",
      authDomain: "let-s-chat-web-app-1e832.firebaseapp.com",
      projectId: "let-s-chat-web-app-1e832",
      storageBucket: "let-s-chat-web-app-1e832.appspot.com",
      messagingSenderId: "389783764423",
      appId: "1:389783764423:web:75a00ac81da72c89deade2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name", user_name);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
