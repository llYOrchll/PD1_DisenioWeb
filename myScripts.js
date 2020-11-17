var usuario = "Jorge O";
var contraseña = "1234567890";

function validateForm(){
    var userInput = document.getElementById('user').value;
    var passInput = document.getElementById('pass').value;
    if(userInput.lenght == "" && passInput.lengh == ""){
        alert("Ingrese un nombre de usuario y contraseña");
        
    } else if(passInput == ""){
        alert("Ingrese una contraseña");
        
    } else if(userInput == ""){
        alert("Ingrese un nombre de usuario");
        
    } else if(userInput != usuario && passInput != contraseña){
        alert("Usuario y contraseña incorrectos");
        
    } else if(userInput == usuario && passInput == contraseña){
        window.open("comentarios.html");
    }
}

function openComments(){
    window.open("comentarios.html");
}

function sendingEmail(){
    alert("Su nombre de usuario y contraseña seran enviados a su correo");
}

function showDetails(){
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('mail').value;
    var website = document.getElementById('website').value;
    var comentario = document.getElementById('comments').value;
    alert("La informacion que enviaratiene estos datos. Nombre" + nombre + " Email" + email + " website: " + website + " Comentario: " + comentario);
}