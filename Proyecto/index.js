'use strict';

function masInformacion() {
    alert('Soy Borja Bravo Casermeiro\n1º DAW\nMi proyecto trata sobre una página que contiene información y ' +
        'noticias sobre la música actual, tanto española como internacional' +
        ', hablando sobre cantantes o grupos y de las canciones o álbumes que van sacando');
}

function enter(id) {
    var cuadro = document.getElementById(id);
    cuadro.style.color = "red";
}

function leave(id) {
    var cuadro = document.getElementById(id);
    cuadro.style.color = "rgb(21, 32, 64)";
}

function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var color = document.getElementsByName('colorElegido')[0];
    var bgColor = document.getElementsByName('colorBgElegido')[0];
    console.log('color elegido ' + color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    // aplicamos el color y el tamaño a todo el documento
    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.documentElement.style.color = color.value;
    document.documentElement.style.backgroundColor = bgColor.value;
    document.getElementById('mensaje').innerHTML = "APLICADO";

    // guardamos en localStorage los elementos para aplicarlo en las otras páginas
    window.localStorage.setItem("tamañoFuente", parseFloat(tamelegido) + "rem");
    window.localStorage.setItem("colorFuente", color.value);
    window.localStorage.setItem("colorFondo",bgColor.value);
}

var tamañoFuente = window.localStorage.getItem("tamañoFuente");
var colorFuente = window.localStorage.getItem("colorFuente");
var colorFondo = window.localStorage.getItem("colorFondo");
if (tamañoFuente && colorFuente && colorFondo) {
    document.documentElement.style.fontSize = tamañoFuente;
    document.documentElement.style.color = colorFuente;
    document.documentElement.style.backgroundColor = colorFondo;
}
