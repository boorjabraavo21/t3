'use strict';

function masInformacion() {
    alert('Soy Borja Bravo Casermeiro\n1º DAW\nMi proyecto trata sobre una página que contiene información y ' +
        'noticias sobre la música actual, tanto española como internacional' +
        ', hablando sobre cantantes o grupos y de las canciones o álbumes que van sacando');
}

function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    /*var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;*/

    var fam = document.getElementsByName('famFuente')[0];
    var famelegido = fam[fam.selectedIndex].value;

    var img = document.getElementsByName('fondoPantalla')[0];
    var imagen = img[img.selectedIndex].value;

    // aplicamos el color y el tamaño a todo el documento
    //document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.fontFamily = famelegido;
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.documentElement.style.color = color.value;
    document.documentElement.style.backgroundImage = imagen;
    document.getElementById('mensaje').innerHTML = "APLICADO";

    // guardamos en localStorage los elementos para aplicarlo en las otras páginas
    //window.localStorage.setItem("tamañoFuente", parseFloat(tamelegido) + "rem");
    window.localStorage.setItem("familiaFuente", famelegido);
    window.localStorage.setItem("colorFuente", color.value);
    window.localStorage.setItem("fondoPantalla",imagen);
}

//var tamañoFuente = window.localStorage.getItem("tamañoFuente");
var familiaFuente = window.localStorage.getItem("familiaFuente");
var colorFuente = window.localStorage.getItem("colorFuente");
var fondoPantalla = window.localStorage.getItem("fondoPantalla");
if (/*tamañoFuente*/familiaFuente && colorFuente && fondoPantalla) {
    //document.documentElement.style.fontSize = tamañoFuente;
    document.documentElement.style.fontFamily = familiaFuente;
    document.documentElement.style.color = colorFuente;
    document.documentElement.style.backgroundImage = fondoPantalla;
}
