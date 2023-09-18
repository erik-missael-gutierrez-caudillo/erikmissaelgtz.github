'use strict'


//----------------------------------***// 5.- Aplicar estilos con Javacript     //const// primerTopping1 = document.querySelector('.topping');           //console.log(primerTopping1.style);***//primerTopping1.style.backgroundColor = 'blue';***//primerTopping1.style.color = '#fff';    //primerTopping1.style.textTransform ='upperCase';*** //------------------***// 6.- Acceder al texto con JavaScript***//const// listaDeToppings=document.getElementById('list-toppings');  // .innerText ----- texto interno          //console.log(listaDeToppings.innerText);            // .textContent ------ texto indentado .........          //console.log(listaDeToppings.textContent);
  // .innerHTML ---- estructura de texto HTML 
  //console.log(listaDeToppings.innerHTML);
  
  //---------------------------------
  // 7.- Cambiar el contenido HTML con JavaScript
  
  //const// title = document.getElementById('title');
  // console.log(title.innerHTML); 
  
  // Reemplazar Texto de title
  //title.innerText = 'Mis Toppings Favoritos';
  
  //----------------------------------
  // 8.- Cambiar atributos con JavaScript
  
  //const// enlace = document.getElementsByTagName('a');
  // Obtener la dirección del enlace 
  //console.log(enlace[0].getAttribute('href'));
  
  // Eliminar el atributo del enlace
  //console.log(enlace[0].removeAttribute('href'));
  
  // Cambiar el contenido del enlace 
  //console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org'));
  
  //----------------------------------
  // 9.- Cambiar y modificar clases con JavaScript
  
  // Seleccionar el elemento 
  //const// primerLi = document.querySelector('.topping');
  // Agregar una clase 
  //primerLi.classList.add('mi-nueva-clase', 'topping');
  
  // Seleccionar el elmento
  //const// primerLiEnUl = document.querySelector('.topping');
  // Verificar si existe la clase
  // Mostrar en consola el resultado
  //console.log(primerLiEnUl.classList.contains('fondo-marron'));
  
  // Eliminar una clase 
  //const// liEnLista = document.querySelector('.topping');
  //liEnLista.classList.remove('topping');
  
  // Mostrar en la consola
  //console.log(liEnLista);
  
  //----------------------------------------
  // 10.- Crear elementos con JavaScript 
  
  // Seleccionar donde voy agregar el elemento
  //const listaDeToppingsUl = document.getElementById('list-toppings');
  
  // Definir el elemento a crear
  //const toppingNuevo = document.createElement('li');
  
  // Agregar clase al elemento
  //toppingNuevo.classList.add('topping', 'fondo-marron');
  
  // Perzonalizar el texto del elemento 
  //toppingNuevo.innerText = 'Queso Estra';
  
  // Agregar el nodo dentro de un elemento 
  //listaDeToppingsUl.append(toppingNuevo);
  
  // Eliminar un nodo de un elemento 
  //listaDeToppingsUl.remove();
  
  // Agregar texto sin etiqueta
  //listaDeToppingsUl.append('Hola Mundo');
  
  
  // 11.- Recorrer el DOM
  
  //const listaDeToppings = document.getElementById('list-toppings');
  
  // Seleccionar el elemento padre(incluye solo los elementos HTML en este ejemplo es el div)
  //console.log(listaDeToppings.parentElement);
  
  // Seleccionar el nodo padre(incluye todos los elementos)
  //console.log(listaDeToppings.parentNode);
  
  // Seleccionar el padre del elemento padre
  //console.log(listaDeToppings.parentElement.parentElement);
  
  // Seleccionar los hijos del elemento
  //console.log(listaDeToppings.children);
  
  // Seleccionar el primer hijo del elemento
  //console.log(listaDeToppings.firstChildchild);
  
  // Seleccionar el ultimo hijo del elemento
  //console.log(listaDeToppings.firstElementChild);
  
  // Seleccionar el hermano anterior de un elemento
  //console.log(listaDeToppings.previousElementSibling);
  
  
  // Seleccionar el hermano siguiente de un elemento
  //console.log(listaDeToppings.nextElementSibling);
  
  // 12.- Escuchar eventos con JavaScript
  
  // 1.-Debemos asociar evento y función para reaaccionar si sucede una acción en un elemento
  
  // 2.- Elemento target (blanco)
  // Como referencia se puede decir que es el que recibe un evento
  // El que alerta sobre el suceso 
  
  // 3.-Trigger
  // Desencadena el evento
  
  // 4.- Event Handler
  // función que se ejecutará cuando ocurre el evento
  
  // 5.- Event Listener
  // "Escuchar un evento"
  
  
  // Función Mostrar Clic 
  //  !-- Onclick // método sencillo--
  //  !-- aplicar --------onclick="mostrarClic('')" ----- al elemento HTML
  /*function mostrarClic(topping) {
      console.log(topping);
  }
  */
  
  



// Free Code Camp
 
// 1.- Comentarios

 // Este es un comentario en linea
/* Este es un comentario de varias lineas */

// 2.- Declarar variables

/*
Declarar variables de JavaScript
En informática, los datos son cualquier cosa que sea significativa para la computadora. JavaScript proporciona ocho tipos de datos diferentes que son undefined, null, boolean, string, symbol, bigint, numbery object.

Por ejemplo, las computadoras distinguen entre números, como el número 12y strings, como "12", "dog"o "123 cats", que son colecciones de caracteres. Las computadoras pueden realizar operaciones matemáticas con un número, pero no con una cadena.

Las variables permiten a las computadoras almacenar y manipular datos de forma dinámica. Lo hacen utilizando una "etiqueta" para señalar los datos en lugar de utilizar los datos en sí. Cualquiera de los ocho tipos de datos se puede almacenar en una variable.

Las variables son similares a las variables xey que se usan en matemáticas, lo que significa que son un nombre simple para representar los datos a los que queremos hacer referencia. Las variables informáticas se diferencian de las variables matemáticas en que pueden almacenar diferentes valores en diferentes momentos.

Le decimos a JavaScript que cree o declare una variable poniendo la palabra clave vardelante de ella, así:

                  var ourName;

crea una variable llamada ourName. En JavaScript terminamos las declaraciones con punto y coma. Los nombres de las variables pueden estar compuestos por números, letras y $o _, pero no pueden contener espacios ni comenzar con un número.

Utilice la var palabra clave para crear una variable llamada myName.

Sugerencia
Mire el ourNameejemplo anterior si se queda atascado.

     var myName;
*/


// 3.- Almacenamiento de valores con el operador de asignación

/*

En JavaScript, puede almacenar un valor en una variable con el operador de asignación ( =).

myVariable = 5;
Esto asigna el Numbervalor 5a myVariable.

Si hay algún cálculo a la derecha del =operador, se realizan antes de que se asigne el valor a la variable a la izquierda del operador.

var myVar;
myVar = 5;
Primero, este código crea una variable llamada myVar. Luego, el código se asigna 5a myVar. Ahora, si myVaraparece nuevamente en el código, el programa lo tratará como si fuera 5.

Asigne el valor 7a la variable a.

*/



// 4.- Asigne el valor de una variable a otra

/*

Después de asignar un valor a una variable mediante el operador de asignación , puede asignar el valor de esa variable a otra variable mediante el operador de asignación .

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

Lo anterior declara una myVarvariable sin valor, luego le asigna el valor 5. A continuación, se declara una variable denominada myNumsin valor. Luego, el contenido de myVar(que es 5) se asigna a la variable myNum. Ahora myNumtambién tiene el valor de 5.

Asigne el contenido de a a la variable b.

var a ;
a = 5;
var b; 
b = a;
*/

// 5.- Inicializando variables con el operador de asignación

/*

Es común inicializar una variable a un valor inicial en la misma línea en la que se declara.

var myVar = 0;
Crea una nueva variable llamada myVary le asigna un valor inicial de 0.

Defina una variable acon vare inicialícela con un valor de 9.

var miVar = 0;
var a = 9;

*/


// 6.- Declarar variables de cadena

/*

Anteriormente usaste el siguiente código para declarar una variable:

var myName;
Pero también puedes declarar una variable de cadena como esta:

var myName = "your name";
"your name"se llama cadena literal . Un literal de cadena, o cadena, es una serie de cero o más caracteres encerrados entre comillas simples o dobles.

Cree dos nuevas variables de cadena: myFirstNamey myLastNamey asígneles los valores de su nombre y apellido, respectivamente.

var myFirstName = 'Erik';
var myLastName = 'Gutierrez';

*/


// 7.- Comprender las variables no inicializadas

/*

Cuando se declaran variables de JavaScript, tienen un valor inicial de undefined. Si realiza una operación matemática con una variable, su resultado undefinedserá "No es un número" . Si concatenas una cadena con una variable, obtendrás una cadena de .NaNundefinedundefined

Inicialice las tres variables a, b, y ccon 5, 10, y "I am a"respectivamente para que no lo sean undefined.


*/

// Only change code below this line
/*
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
console.log

*/

// 8.- Comprender la sensibilidad a mayúsculas y minúsculas en variables


/*

En JavaScript, todas las variables y nombres de funciones distinguen entre mayúsculas y minúsculas. Esto significa que la capitalización importa.

MYVARno es lo mismo que MyVarni myvar. Es posible tener múltiples variables distintas con el mismo nombre pero con diferente mayúscula. Se recomienda encarecidamente que, en aras de la claridad, no utilice esta función de idioma.

Mejores prácticas

Escribe nombres de variables en JavaScript en camelCase . En camelCase , los nombres de variables de varias palabras tienen la primera palabra en minúscula y la primera letra de cada palabra posterior está en mayúscula.

Ejemplos:

var algunasVariables;
var otroNombreDeVariable;
var elNombreDeEstaVariableEsMuyLargo;


// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
*/


// 9.- Explore las diferencias entre las palabras clave var y let


/*

Uno de los mayores problemas con la declaración de variables con la palabra clave es que puede sobrescribir fácilmente las declaraciones de variables:var

Var Campista = "James";
var camper = "David";
console.log(camper);
En el código anterior, la variable se declara originalmente como , y luego se reemplaza para ser . A continuación, la consola muestra la cadena .camperJamesDavidDavid

En una aplicación pequeña, es posible que no se encuentre con este tipo de problema. Pero a medida que su base de código se hace más grande, puede sobrescribir accidentalmente una variable que no tenía la intención. Debido a que este comportamiento no produce un error, buscar y corregir errores se vuelve más difícil.

Se introdujo una palabra clave llamada en ES6, una actualización importante de JavaScript, para resolver este posible problema con la palabra clave. Aprenderá sobre otras características de ES6 en desafíos posteriores.letvar

Si reemplaza con en el código anterior, se produce un error:varlet

dejar Campista = "James";
let camper = "David";
El error se puede ver en la consola de su navegador.

Por lo tanto, a diferencia de , cuando se utiliza , una variable con el mismo nombre sólo se puede declarar una vez.varlet

 let catName = "Oliver";
let catSound = "Meow!";

*/


 // 10.- La palabra clave no es la única forma nueva de declarar variables. En ES6, también puede declarar variables utilizando la palabra clave.letconst


/*

const tiene todas las características increíbles que tiene, con la ventaja adicional de que las variables declaradas usando son de solo lectura. Son un valor constante, lo que significa que una vez que una variable se asigna con , no se puede reasignar:letconstconst

const FAV_PET = "Cats";
FAV_PET = "Dogs";
La consola mostrará un error debido a la reasignación del valor de .FAV_PET

Siempre debe nombrar las variables que no desea reasignar usando la palabra clave. Esto ayuda cuando accidentalmente intenta reasignar una variable que está destinada a permanecer constante.const

Nota: Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y minúsculas o camelCase para valores mutables (objetos y matrices). Aprenderá más sobre objetos, matrices y valores inmutables y mutables en desafíos posteriores. También en desafíos posteriores, verá ejemplos de identificadores de variables en mayúsculas, minúsculas o camelCase.

Cambie el código para que todas las variables se declaren mediante o . Utilícelo cuando desee que la variable cambie y cuando desee que la variable permanezca constante. Además, cambie el nombre de las variables declaradas con para que se ajusten a las prácticas comunes. No cambie las cadenas asignadas a las variables.letconstletconstconst


Pruebas
Espera:VAR no debe existir en el código.
Espera:Debe cambiar fCC a mayúsculas.
Espera:FCC debe ser una variable constante declarada con const.
Espera:La cadena asignada a FCC no debe cambiarse.
Espera:El hecho debe ser declarado con let.
Espera:consola.log debe cambiarse para imprimir las variables FCC y fact.


PRUEBA

var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line

RESULTADO

const FCC = "freeCodeCamp"; // Change this line
 let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

*/

// 11.- Agregar dos números con JavaScript

/*

Number es un tipo de datos en JavaScript que representa datos numéricos.

Ahora intentemos agregar dos números usando JavaScript.

JavaScript usa el símbolo como un operador de suma cuando se coloca entre dos números.+

Ejemplo:

const myVar = 5 + 10;
myVar ahora tiene el valor .15

const sum = 10 + 10;

*/

// 12.- Restar un número de otro con JavaScript

/*

También podemos restar un número de otro.

JavaScript usa el símbolo para la resta.-

Ejemplo

const myVar = 12 - 6;
myVar tendría el valor .6

Cambie el para que la diferencia sea .012

const difference = 45 - 33;

*/

// 13.- Multiplicar dos números con JavaScript

/*

También podemos multiplicar un número por otro.

JavaScript utiliza el símbolo para la multiplicación de dos números.*

Ejemplo

const myVar = 13 * 13;
myVar tendría el valor .169

Cambie el para que el producto sea igual a 80

 const product = 8 * 10;

*/

// 14.- Dividir un número por otro con JavaScript

/* 

También podemos dividir un número por otro.

JavaScript utiliza el símbolo para la división /

Ejemplo

const myVar = 16 / 2;
myVar ahora tiene el valor .8

Cambie el para que el resultado sea igual a 2

const dividir = 66 / 33;

*/

// 15.- Incrementar un número con JavaScript 

/*

Puede aumentar o agregar fácilmente uno a una variable con el operador.++

i++;
es el equivalente de

i = i + 1;
Nota: Toda la línea se convierte en , eliminando la necesidad del signo igual.i++;

Cambie el código para utilizar el operador en con ++ para que el valor sea 88

let myVar = 87;

let myVar = myVar++;


*/


// 16.- Disminuir un número con JavaScript


/*

Puede disminuir o disminuir fácilmente una variable por uno con el operador.--

i--;
es el equivalente de

i = i - 1;
Nota: Toda la línea se convierte en , eliminando la necesidad del signo igual.i--;

Cambie el código para utilizar el operador en miVar--

let myVar = 11;

// Only change code below this line
myVar = myVar - 1;

let myVar = 11;

// Only change code below this line
myVar--;
*/
