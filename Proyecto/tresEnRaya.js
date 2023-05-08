'use strict';
var tablero = [[],[],[]];

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
function ponerDibujos(identificador, posX, posY) {
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
        if (tablero[posX][posY] == null) {
            cuadro.innerHTML = simbolo;
            tablero[posX][posY] = simbolo;
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
   if (tablero[0][0] == tablero[0][1] && tablero[0][0] == tablero[0][2] && tablero[0][0] != null) {
        return true;
    } else if (tablero[1][0] == tablero[1][1] && tablero[1][0] == tablero[1][2] && tablero[1][0] != null) {
        return true;
    } else if (tablero[2][0] == tablero[2][1] && tablero[2][0] == tablero[2][2] && tablero[2][0] != null) {
        return true;
    } else if (tablero[0][0] == tablero[1][0] && tablero[0][0] == tablero[2][0] && tablero[0][0] != null) {
        return true;
    } else if (tablero[0][1] == tablero[1][1] && tablero[0][1] == tablero[2][1] && tablero[0][1] != null) {
        return true;
    } else if (tablero[0][2] == tablero[1][2] && tablero[0][2] == tablero[2][2] && tablero[0][2] != null) {
        return true;
    } else if (tablero[0][0] == tablero[1][1] && tablero[0][0] == tablero[2][2] && tablero[0][0] != null) {
        return true;
    } else if (tablero[0][2] == tablero[1][1] && tablero[0][2] == tablero[2][0] && tablero[0][2] != null) {
        return true;
    } else {
        return false;
    }
}