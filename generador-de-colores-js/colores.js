'use strict'

// Seleccionar los elementos del DOM

const button = document.querySelector('button');
const color = document.getElementById('color');


function generarColorHexAleatorio () {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

for (let i = 0; i < 6; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
}
    console.log(colorHex)
    return colorHex;
}


// Asociar función
button.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio();
    // Actualizar el texto del elemento
    color.textContent = colorAleatorio;
    // ACtualizar el color de fondo
    document.body.style.backgroundColor = colorAleatorio;
});

























