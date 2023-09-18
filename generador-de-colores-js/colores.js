// Seleccionar los elementos del DOM
// Botón
const button = document.querySelector('button');
// Párrafo del código
const color = document.getElementById('color');

// Generar el color aleatorio 
function generarColorHexAleatorio () {
    // Digitos 
    let digitos = '0123456789ABCDEF';
    // Asignar # para el inicio del código
    let colorHex = '#';

    // Bucle para generar color de seis digítos
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


