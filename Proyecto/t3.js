'use strict';
/*Borja Bravo Casermeiro
  1º DAW*/
function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var fam = document.getElementsByName('famFuente')[0];
    var famelegido = fam[fam.selectedIndex].value;

    var img = document.getElementsByName('fondoPantalla')[0];
    var imagen = img[img.selectedIndex].value;

    const nombre = document.getElementsByName('nombreUsuario')[0];

    // aplicamos el color, tamaño, fondo y nombre de usuario
    document.documentElement.style.fontFamily = famelegido;
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.documentElement.style.color = color.value;
    document.documentElement.style.backgroundImage = imagen;
    document.getElementById('usuario').innerHTML = nombre.value;
    document.getElementById('mensaje').innerHTML = "APLICADO";

    // guardamos en localStorage los elementos para aplicarlo en las otras páginas
    window.localStorage.setItem("familiaFuente", famelegido);
    window.localStorage.setItem("colorFuente", color.value);
    window.localStorage.setItem("fonPantalla",imagen);
    window.sessionStorage.setItem("nomUsuario",nombre.value); // aquí usamos el sessionStorage para que se mantenga solo durante la sesión
}

var familiaFuente = window.localStorage.getItem("familiaFuente");
var colorFuente = window.localStorage.getItem("colorFuente");
var fondoPantalla = window.localStorage.getItem("fonPantalla");
const usuarioGuardado = window.sessionStorage.getItem('nomUsuario');

// mostramos por consola los elementos almacenados en la web
console.log(familiaFuente);
console.log(colorFuente);
console.log(fondoPantalla);
console.log(usuarioGuardado);

// cargamos las páginas con los elementos almacenados
document.documentElement.style.fontFamily = familiaFuente;
document.documentElement.style.color = colorFuente;
document.documentElement.style.backgroundImage = fondoPantalla;
const form = document.getElementById('formUsuario'); // uso de constantes para mantener en la sesión el mismo nombre en las diferentes páginas
const usuario = document.getElementById('usuario');
if (usuarioGuardado) {
    usuario.innerHTML = usuarioGuardado;
} else {
    usuario.innerHTML = 'Sin identificar';
}
form.addEventListener('submit', function(event) { // función para resetear el valor al cerrar la sesión
    event.preventDefault();
    const nomUsuario = document.getElementsByName('nombreUsuario')[0].value;
    sessionStorage.setItem('nomUsuario',nomUsuario);
    usuario.innerHTML = nomUsuario;
    form.reset();
});