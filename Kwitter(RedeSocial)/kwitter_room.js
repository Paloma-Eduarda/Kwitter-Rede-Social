
//ADICIONE SEUS LINKS DO FIREBASE
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

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";
// fazer
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
//

//Não precisa
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

//fazer
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
