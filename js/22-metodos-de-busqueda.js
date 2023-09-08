'use strict'

// Metodos de busqueda

var texto1 = "Bienvenidos a JavaScript";

var texto2 = "Estoy aprendiendo";

/*

Buscar en posición

indexOf,
search, indica posicion
match,
includes



*/


var busqueda = texto1.indexOf("a");
console.log(busqueda);


var busqueda = texto1.search("JavaScript");
console.log(busqueda);


var busqueda = texto1.match("Bien");
console.log(busqueda);


/*
    Sacar Frases
*/

var buscar = texto1.includes("Bienvenidos"); //includes
console.log(buscar);

// Remplazar texto 

var encontrarCambiar = texto1.replace("JavaScript", "Angular"); // Nuevo valor "Bienvenidos a Angular"
console.log(encontrarCambiar);




