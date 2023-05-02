'use strict';

function masInformacion() {
    alert('Soy Borja Bravo Casermeiro\n1º DAW\nMi proyecto trata sobre');
}

function enter(id) {
    var cuadro = document.getElementById(id);
    cuadro.style.color = "red";
}

function leave(id) {
    var cuadro = document.getElementById(id);
    cuadro.style.color = "rgb(21, 32, 64)";
}