'use strict'

/*

1- Pida 5 numeros por pantalla y loe meta en un array
2- Mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola
3-Ordenarlo y mostrarlo
4-invertir su orden y mostrarlo
5-Mostrar cuantos elementos tiene el array

*/

function MostrarArray(elementos, texto = ""){
    //Mostrar en un array de la página
    document.write("<h1>Contenido del array "+texto+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
       document.write("<li>"+elemento+"</li>");
    });

    document.write("</ul>");
}


var numeros = new Array(5);

// Pedir numeros

for(var i = 0; i <= 4; i++){
    numeros[i] = parseInt(prompt("Introduce un numero", 0));
}

// Mostrar el array en el cuerpo de la página

MostrarArray(numeros);

//Mostrar en la consola el array
console.log(MostrarArray);

//Ordenar el array y mostrar
numeros.sort(function(a,b){return a-b});//.sort y function(a,b) se utiliza para llamar la función de ordenar correctamente
MostrarArray(numeros, 'ordenado');// Ordenado se usa para invocar la función ordenar

// Invertir y mostrar 
numeros.reverse();// Reverse se usa para llamar la función de ordenar revertidamente 
MostrarArray(numeros, 'revertido');// Revertido invoca la función reverse

// Contar elementos

document.write("<h1>El array contiene "+numeros.length+"</h1>");// .length es el numero de elementos que contiene el array







