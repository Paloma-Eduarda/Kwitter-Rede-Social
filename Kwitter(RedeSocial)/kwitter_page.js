//LINKS DO SEU APP FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyC7EksWZ9og42dbC559LIuhk7uJRnMiTBc",
    authDomain: "kwitter-2e775.firebaseapp.com",
    databaseURL: "https://kwitter-2e775-default-rtdb.firebaseio.com",
    projectId: "kwitter-2e775",
    storageBucket: "kwitter-2e775.appspot.com",
    messagingSenderId: "105307680728",
    appId: "1:105307680728:web:66275c0625855677ccccad"
  };
  //Inicializar 
firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Comece a programar aqui

//Termine de programar aqui
      } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({

    });
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
}