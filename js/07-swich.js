 'use strict'

// Switch nos ahorra estar escribiendo else

var edad = 23;
var imprime = "";

switch(edad) {
    case 18:
        imprime = "Ya eres mayor de edad";
        break;
case 25:
    imprime = "Aún eres joven";
    break;
case 40:
    imprime = "Ya no eres joven";
    break;
    case 75:
        imprime ="Eres un anciano";
        break;
        default:
            imprime = "Tu edad es neutral";
            break;
}

console.log(imprime);









