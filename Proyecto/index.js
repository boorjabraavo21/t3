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