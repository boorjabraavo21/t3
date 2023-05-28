'use strict';

function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var fam = document.getElementsByName('famFuente')[0];
    var famelegido = fam[fam.selectedIndex].value;

    var img = document.getElementsByName('fondoPantalla')[0];
    var imagen = img[img.selectedIndex].value;

    var nombre = document.getElementsByName('nombreUsuario')[0];

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
    window.localStorage.setItem("nomUsuario",nombre.value);
}

var familiaFuente = window.localStorage.getItem("familiaFuente");
var colorFuente = window.localStorage.getItem("colorFuente");
var fondoPantalla = window.localStorage.getItem("fonPantalla");

document.documentElement.style.fontFamily = familiaFuente;
document.documentElement.style.color = colorFuente;
document.documentElement.style.backgroundImage = fondoPantalla;
if (window.localStorage.getItem('nomUsuario')) {
    document.getElementById('usuario').innerHTML = window.localStorage.getItem('nomUsuario');
}
window.onload = function() {
    window.localStorage.removeItem('nomUsuario');
};