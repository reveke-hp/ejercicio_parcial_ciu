

var botonIngresar = document.getElementById("btnIngresar")
botonIngresar.addEventListener("click",iniciarSesion)

function iniciarSesion(){
var nombre = document.getElementById("usuario")
var password = document.getElementById("contraseña")

    if(nombre.value === null || nombre.value === "" && password.value === null || password.value === ""){
        validar()
    }
    else{
        window.location.href = "inicio.html"
    }
}


function validar(){
    var usuario = document.getElementById("usuario").value
    var contraseña = document.getElementById("contraseña").value

    if(isNaN(usuario)){
        alert("El usuario ingresado no es un numero.")
    }
    else if(contraseña.length < 4){
        alert("La contraseña es demasiado corta.")
    }
    else{
        alert("El usuario y/o contraseña son incorrectos")
    }
}

