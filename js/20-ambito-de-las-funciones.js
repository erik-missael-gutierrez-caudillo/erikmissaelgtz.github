'use strict'

// El ambito de las variables

var texto = "Hola soy una variable global";

var numero = 10;

function holaMundo(texto) {
    var elemento = "Estoy adentro"; // soy una variable local
    console.log(texto); // Puedo llamar una variable global
    console.log(numero);
    console.log(elemento);
}

holaMundo(texto);

/* 
console.log(elemento); 
// Esto no se puede hacer ya que elemento no es una variable global
*/






















