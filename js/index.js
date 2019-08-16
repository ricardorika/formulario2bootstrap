function send (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var gendermale = document.getElementById("male").checked;
  var genderfemale = document.getElementById("female").checked;
  var result = document.getElementById("result");

  if (name.split(" ").length >= 2) {

    result.innerHTML = name + "<br/>" + email + "<br/>" + address;
  } else {
    result.innerHTML = "<div class='alert alert-danger'>Voce nao digitou o seu nome completo</div>";
  }
 if (gendermale == true) {
 	alert ('Bem vindo ao site Sr. ' + name);
 } else {
 	alert ('Bem vindo ao site Sra. ' + name);
 }
}