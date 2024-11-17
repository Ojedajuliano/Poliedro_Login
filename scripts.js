
const buttonLogin1 = document.querySelector(".buttonLogin1");
const buttonLogin2 = document.querySelector(".buttonLogin2");
const login = document.querySelector(".formLogin");
const register = document.querySelector(".formRegister");
let user = "jno_978@hotmail.com";
let pass = "Juliano10";
let nombre = "";
let apellido = "";
let cambio = true;

let tieneUsuario = false;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


 function IniciarSesion () {
    if (tieneUsuario == true) {
        if (document.querySelector(".emailLogin").value.toLowerCase() == user.toLowerCase() ){
            if (document.querySelector(".passLogin").value == pass){
                alert("Usted ingreso correctamente");
                alert("Su nombre completo es " + nombre + " " + apellido )
            } else{
                alert("Contraseña incorrecta")
            } 
        } else {
            window.alert("Usuario Incorrecto")
        };
    } else (
        window.alert("Registrese primero")
    )
};

function cambioR(){
    if ( cambio == true ) {
        login.style.display = "none";
        register.style.display = "flex";
        cambio = false;
    } else {
        login.style.display = "flex";
        register.style.display = "none";
        cambio = true;
    }

};
const regex = /^[a-zA-Z0-9]+$/;


function registrarse () {
    if (!emailRegex.test(document.querySelector(".mailRegister").value)){
        alert("Ingrese un email correcto");
    } else if(!regex.test(document.querySelector(".passRegister").value)) {
        alert("Ingrese un contraseña que contenga solo letras y numeros");
    } 
    else {
        user = document.querySelector(".mailRegister").value;
        pass = document.querySelector(".passRegister").value;
        nombre = document.querySelector(".nameRegister").value;
        apellido = document.querySelector(".apellidoRegister").value;
        alert("Se ha registrado correctamente");
        tieneUsuario = true;
        cambioR();

    }
};

