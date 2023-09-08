'use strict'

// Transformacion de textos

/*
    to: Sirve para indicar que quieres transformar texto
    toString: Convierte a string

*/

var numero = 444;
var texto1 = "Bienvenidos a JavaScript";
var texto2 = "Estoy aprendiendo mucho";

var dato = numero.toString();
dato = texto1.toUpperCase();

console.log(dato);


// Calcular longitud

/*
    length: Sirve para saber si hay algo en la variable
*/

var nombre = "Erik";

console.log(nombre.length);// Largo de caracteres

// Concatenar o unir textos.

var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);