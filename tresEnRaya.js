'use strict';

function enter(identificador) {
    var id = 'c'+identificador;
    var cuadro = document.getElementById(id);
    cuadro.style.backgroundColor = "yellowgreen";
}

function leave(identificador) {
    var id = 'c'+identificador;
    var cuadro = document.getElementById(id);
    cuadro.style.backgroundColor = "navajowhite";
}

var contador = 0;
function ponerDibujos(identificador) {
    if (contador < 3) {
        var id = 'c'+identificador;
        var cuadro = document.getElementById(id);
        cuadro.innerHTML = "O";
        contador++;
    }
}