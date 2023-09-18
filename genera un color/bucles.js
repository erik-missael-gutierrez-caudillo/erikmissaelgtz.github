// Seleccionar los elementos del DOM


// Botón
const button = document.getElementById('iconLike');
// Párrafo para mostrar el número de likes
const parrafo = document.getElementById('iconLikeNumero');

// Sumar los clics del botón likes
let contador = 0;



// Agregar función addaEventListener

// Sintaxis de la función addEventListener
button.addEventListener('click', () => {
  contador++;
  // Agregar el contador (numero de clics) como contenido de texto al párrafo small
  parrafo.textContent = contador;
});




/*
button.addEventListener('click', ()=> {
  contador++;
  parrafo.textContent = contador;
} num);


(*opcional1*, *opcional2*) o () <-- anónimo
*/




// Seleccionar ellementos a utilizar 

// Botón 
const boton2 = document.getElementById('mensaje');

// Seleccionar el elemento que mostrará el número
const numComentarios = document.getElementById('numComentarios');

// Variable que contará los clics
let sumar = 0;


boton2.addEventListener('click', () => {
    sumar++;
    numComentarios.textContent = sumar;
})




// Seleccionar los elementos del DOM


// Botón
const iconDislike = document.getElementById('iconDislike');
// Párrafo para mostrar el número de likes
const iconDislikeNumeroDislike = document.getElementById('iconDislikeNumero');

// Sumar los clics del botón likes
let aumentar = 0;

// Agregar función addaEventListener

// Sintaxis de la función addEventListener
iconDislike.addEventListener('click', () => {
  aumentar++;
  // Agregar el contador (numero de clics) como contenido de texto al párrafo small
  iconDislikeNumero.textContent = aumentar;
});
