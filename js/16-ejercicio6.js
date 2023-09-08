'use strict'

/*

-Pida los numeros por pantall.
-Si metemos uno mal, que lo vuelva a pedir.
-Mostrar en el body el reesultado de sumar, restar, multiplicar y dividir.

*/


var numero1 = parseInt(prompt("Introduce el primer numero", 0));

var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 < 0 || numero2 < 0 || isNan(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero", 0));

    numero2 = parseInt(prompt("Introduce el segundo numero"));
}

var resultado = "La suma es :" + (numero1 + numero2) + "<br/>"+
"La Resta es :" + (numero1 - numero2) + "<br/>"+
"La Multiplicación es :" + (numero1 * numero2) + "<br/>"+
"La División es :" + (numero1 / numero2) + "<br/>";

document.write(resultado);