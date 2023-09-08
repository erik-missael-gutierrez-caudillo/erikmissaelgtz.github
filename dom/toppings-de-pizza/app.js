'use strict'


// Buscar Elmentos Con JavaScript


/* console.log(typeof); <-----devuelve el tipo de elemento(object) */
/* console.log(title.innerText); <-----devuelve el texto interno del elemento */
/* console.log(title.tagName); <----- devuelve el nombre de la etiqueta */
/* Si devuelve Null <---- significa que no existe */
//console.log(title.tagName);

//-----------------------------------------------------
// 1.-Buscar elemento por ID // ----> document.getElementById('')

//const// contenedor = document.getElementById('title');

// console.log(contenedor);



//---------------------------------------------------
// 2.- Buscar elemento por nombre de clase //---> document.getElementsByClassName('')

//const// toppings = document.getElementsByClassName('topping');

//console.log(toppings[0].id);
//const// toppingsFondoMarron = document.getElementsByClassName('fondo-marron');

//console.log(toppingsFondoMarron);


//---------------------------------------
// 3.- Buscar elemento por nombre de etiqueta // ----> document.getElementsByTagName('')

//const// misToppings = document.getElementsByTagName('li');
//console.log(misToppings);



//-------------------------------------------
// 4.- Buscar por descripción // Usar para ser mas específico //--> document.querySelector('')

//const// aceituna = document.querySelector('#aceitunas');
//console.log(aceitunas);

//const// primerTopping = document.querySelector('.topping.fondo-naranja');
//console.log(primerTopping);

//const// fondoNaranja = document.querySelector('ul li.fondo-naranja');
//console.log(fondoNaranja);

//const// primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
//console.log(primerToppingNoMarron);


// Selecciona todos los elementos con la especificación que utilice
// document.querySelectorAll('')
//const// toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
//console.log(toppingsNaranja);
//console.log(toppingsNaranja[0]);
//console.log(toppingsNaranja[1]);



//----------------------------------
// 5.- Aplicar estilos con Javacript

//const// primerTopping1 = document.querySelector('.topping');
//console.log(primerTopping1.style);
// primerTopping1.style.backgroundColor = 'blue';
//primerTopping1.style.color = '#fff';
//primerTopping1.style.textTransform = 'upperCase';

//-----------------------------------
// 6.- Acceder al texto con JavaScript

//const// listaDeToppings = document.getElementById('list-toppings');
// .innerText -----> texto interno
//console.log(listaDeToppings.innerText);
// .textContent ------> texto indentado .........
//console.log(listaDeToppings.textContent);
// .innerHTML ----> estructura de texto HTML 
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
//  <!-- Onclick // método sencillo-->
//  <!-- aplicar --------> onclick="mostrarClic('')" <----- al elemento HTML
/*function mostrarClic(topping) {
    console.log(topping);
}
*/


// Función al hacer clic
// Todos los eventos son tratados como objetos por
// Evento
// Onclick --------> Add Event Listener

// HTML

// Asigna el  ------>  onclick="nombreDeTuFuncion(parametro)" al elemento
// En este ejemplo asigne ---> onclick="mostrarClic(topping)" al li con id albahaca
/*
  <div id="container">
    <h1 id="title">🍕 <br>Toppings de pizza.</h1>
    <ul id="list-toppings">
      <li class="topping fondo-marron" id="aceitunas">Aceitunas</li>
      <li class="topping fondo-naranja">Cebollas</li>
      <li onclick="mostrarClic(topping)" class="topping fondo-marron" id="albahaca">Albahaca</li> // ------> este elemento es el target en la función. // He asignado un ejemplo mas adelante para llamar a la consola el target.
      <li class="topping fondo-naranja">Champinones</li>
    </ul>
   </div> 
*/

// JavaScript

// 1.- Crea una variable // Ya sea  ------>   (var || let || const) la que vayas a utilizar

// Variable
//  |
//  |
// Constante // No cambia su valor
//  |
//  |
//  |  Nombre de variable
//  |      |        Coge el Elemento del HTML
//  |      |                   |   Con Id
//  |      |                   |      |    Nombre Id
//  |      |                   |      |       |
 const albahaca = document.getElementById('albahaca');
//                  |                     |
//                  |           Asigna las comillas // Pueden ser "" o ''
//                  |
//            Selecciona el documento

// 2.- Crea la función 

//       Nombre de la función
//            |     Elemento utilizado
//            |         |  
//            |       Parametro
//            |         |
//            |         |
/* function mostrarClic(albahaca) {
   console.log(albahaca); // Llama la función a mostrar en la consola
 }

// Parametro
//   |
//   |
 albahaca.addEventListener('click', mostrarClic);
//          |                |            |
//          |                |            |
// Escucha el evento         |            |
                   //Que escuchará?       |
                                // Que ejecutará?


// Invocar el Target de la función                                 

// Llamar al elemento target a la consola dentro de la función
/* function mostrarClic(albahaca) {
    console.log(albahaca.target); // Llama la función a mostrar en la consola
} */


// Llamar al elemento target a la consola fuera de la función

//console.log(albahaca.target); // Llama la función a mostrar en la consola */




//const toppings = document.getElementsByClassName('topping');


/*

function mostrarClic(e) {
    console.log(e.target.innerText);
}

for (topping of toppings) {
    topping.addEventListener('click', mostrarClic);
}


*/

// Función flecha

/*for (topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}*/





