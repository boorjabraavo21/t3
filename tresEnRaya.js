'use strict';
alert('Este es mi tres en raya\nBorja Bravo Casermeiro\n1º DAW');
var tablero = [];

function enter(identificador) {
    var id = 'c'+identificador;
    var cuadro = document.getElementById(id);
    cuadro.style.backgroundColor = "rgb(208, 101, 62)";
}

function leave(identificador) {
    var id = 'c'+identificador;
    var cuadro = document.getElementById(id);
    cuadro.style.backgroundColor = "navajowhite";
}

var contador = 0;
function ponerDibujos(identificador) {
    var id;
    var cuadro;
    if (contador < 9) {
        id = 'c'+identificador;
        cuadro = document.getElementById(id);
        var simbolo;
        if (contador % 2 == 0) {
            simbolo = "X";
        } else {
            simbolo = "O";
        }
        var posicion = identificador - 1;
        if (tablero[posicion] == null) {
            cuadro.innerHTML = simbolo;
            tablero[posicion] = simbolo;
            contador++;
        }
        if (haGanado()) {
            alert("Enhorabuena, ¡ha ganado el jugador "+simbolo+"!");
            contador = 9;
        } else if (contador == 9 && !haGanado()) {
            alert("Empate, vuelta a empezar");
        }
    }
}

function haGanado() {
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0] != null) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3] != null) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6] != null) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0] != null) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1] != null) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2] != null) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0] != null) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2] != null) {
        return true;
    } else {
        return false;
    }
}