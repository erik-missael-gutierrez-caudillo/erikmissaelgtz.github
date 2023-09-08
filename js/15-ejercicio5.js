'use strict'
/*
    Tabla de multiplicar de un numero introducido por el usuario
*/

var numero = parseInt(prompt("¿De que numero quieres la tabla?", 1));

document.write("<h1>Tabla del " + numero + "</h1>");

for (var i = 1; i < 11; i++) {
    document.write("<p>" +i + " x " + numero + " = " + (i * numero) + "<br/>" + "</p>")
}