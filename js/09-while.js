'use strict'

// Modo infinito

// Bucle while, Mientras que

var year = 2018;

// Operador de incremento 

while (year <= 2051) {
    // Ejecuta esto 
    console.log("Estamos en el año: " + year );

    // Parar un bucle
    if(year == 2023) {
        break;
    }

    year++;
}

// Descontar !=

var semana = 15;

while (semana != 8) {
    // Ejecuta esto
    console.log("Estamos en la semana: " + semana);

    semana--;
}


// Do while
// Ejecutar y comprobar despues 

var diaDelMes = 30;

do {
alert("Solo cuando sea diferente a 20");
diaDelMes--;
} while(diaDelMes > 20)