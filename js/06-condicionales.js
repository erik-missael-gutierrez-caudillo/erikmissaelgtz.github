'use strict'

// Condicional if
// Si A es igual a B haz algo 

var edad = 20;
var edad2 = 22;


// Si pasa esto
if(edad > edad2){
    //ejecuta esto
    console.log("Edad es mayor que edad2");
} else {
    console.log("Edad es inferior a edad2");
}

// Otro ejemplo 
var edad = 27;

var nombre = 'Erik';

/*
    Operadores Racionales
    Mayor: >
    Menor: <
    Mayor o Igual: >=
    Menor o Igual: <=
    Igual: ==
    Distinto: !=
*/

// Solo pueden acceder mayores de 18 años 
if(edad >= 18){
    // Es mayor de edad 
    console.log(nombre + " tienes " + edad + " años, eres mayor de edad");
} if(edad<= 33 && edad >= 25) {
    console.log('Todavía eres joven no dejes tus sueños, lucha por ellos');
} else if(edad >= 70 && edad <= 100){
    console.log('Eres un anciano, un libro de lleno de pasajes por la vida. Tu experiencia puede ayudar a los jovenes. si tienes a quienes guialos en su camino por la vida 👌');
}   else if(edad < 18 && edad >= 15){
    console.log('Estas en tu pleno desarrollo en todo aspecto, llevalo de la mejor manera');
} else {
    // Es menor de edad
    console.log('Eres un jovencito, pero el tiempo avanza rapido no lo desperdicies');
}

// Operadores Logicos 

/*
    AND(Y): &&
    OR(O): ||
    NEGACION: !=
*/

// Año
var year = 2023;

if(year != 2016) {
    console.log("Estamos en el " + year + " esta vez te equivocaste");
}

// AND

if(year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era postmoderna");
}

// OR

if(year >= 2003 || year == 2013) {
console.log("El año acaba en 3");
}