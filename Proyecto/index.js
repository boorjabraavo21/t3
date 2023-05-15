'use strict';

function masInformacion() {
    alert('Soy Borja Bravo Casermeiro\n1º DAW\nMi proyecto trata sobre una página que contiene información y '+ 
    'noticias sobre la música actual, tanto española como internacional'+
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
    console.log('color elegido '+color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    // aplicamos el color y el tamaño a todo el documento
    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.documentElement.style.color = color.value;
    document.documentElement.style.backgroundColor = bgColor.value;
    document.getElementById('mensaje').innerHTML = "APLICADO";
    window.localStorage.setItem("modoGuardado","ajustes");
}

function leerModoActual() {
    let modo = window.localStorage.getItem("modoGuardado");
    console.log(modo);
    if (!modo) {
        // devolverá modo DIA si no hay modo guardado
        modo = "ajustes";
    } 
    return modo;
}

var modo = leerModoActual();
