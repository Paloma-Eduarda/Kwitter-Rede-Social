function addUser(){

  user_name = document.getElementById("user_name").value; //guarda nome do usuario na variavel user_name
  localStorage.setItem("user_name", user_name); //Salva no armmazenamento local do navegador

  window.location ="kwitter_room.html";
}
