'use strict'
// Arrays, Arreglos, Matrices

//var nombre = "Erik";
/*
var nombres = [ "Yareli Esmeralda nacida el 24/01/2003 La chiqueada de la casa y la que fue a ponerse borracha al cumpleaños de mona 😊", "Erik Missael nacido el 23/08/1995, chico guapo, inteligente, y proximamente desarrollador web", "Erik", "Rosa Elvia 'la mimi' 👩‍🦰 de la casa nacida el 28/10/1977 la mas chiquita de tamaño y mayor en edad pero muyyyyyyyyyyyyyyyy, muyyyyyyyyyyyyyyyyyyyyyyyyyyy conservada, dice que es chaparrita por que 'Las cosas buenas se sirven en frascos pequeños'😅"];

var lenguajes = new Array("PHP", "Wordpress", "Angular");

console.log(nombres);

var elemento = parseInt(prompt("Tomando en cuenta que el 1 es 0, el 2 es 1 y asi sucesivamente ¿Que número en el orden por edad de tu familia tienes?"));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " +nombres.length);
} else {
    document.write("<h2> "+nombres[elemento]+"</h2>");
}
*/

document.write("<h1>Lenguajes de programación</h1>")
document.write("<ul>")
/*
for(var i = 0; i < lenguajes; i++) {
    document.write("<li>" +lenguajes[i]+ "</li>")
}
*/

lenguajes.forEach((elemento, index, data) => {
    document.write("<li>"+elemento+"</li>")
})


document.write("</ul>")



