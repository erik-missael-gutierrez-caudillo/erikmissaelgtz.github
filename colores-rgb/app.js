// Inicio de app

// Div contenedor
const contentInit = document.getElementById('contentInit');

const buttonInit = document.getElementById('buttonInit');

buttonInit.addEventListener('click', () => {
  container.style.display = 'flex';
  contentInit.style.display = 'none';
})


// Seleccionar elementos de referencia 
// Inputs tipo range // Variable global
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

//  Texto en párrafos 
const textRed = document.getElementById('textRed');
const textGreen = document.getElementById('textGreen');
const textBlue = document.getElementById('textBlue');

// Variables para extraer el valor del input range
let red = inputRed.value; // valor de inicio 23
let green = inputGreen.value;  // valor de inicio 41
let blue = inputBlue.value;   // valor de inicio 56

// Variables para reemplazar valores obtenidos em los imputs
// Actualizar el valor de los párrafos
textRed.innerText = red;
textGreen.innerText = green;
textBlue.innerText = blue;

let addColor = document.getElementById('addColor');

// Función para actualizar el color 
function actualizarColor(red, green, blue) {
  // Reemplazar el valor de las variables --> ${}
  // Crear el color RGB
  const colorRGB = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = colorRGB;
  addColor.style.backgroundColor = colorRGB;
  addColor.style.borderColor = colorRGB;
}

// Eventos

// Para actualizar el color rojo 
inputRed.addEventListener('change', (e) => {
  let red = e.target.value;
  textRed.innerText = red;
  actualizarColor(red, green, blue);
});

// Para actualizar el color verde
inputGreen.addEventListener('change', (e) => {
  let green = e.target.value;
  textGreen.innerText = green;
  actualizarColor(red, green, blue);
});


// Para actualizar el color azul
inputBlue.addEventListener('click', (e) => {
  let blue = e.target.value;
  textBlue.innerText = blue;
  actualizarColor(red, green, blue);
});



addColor.addEventListener('click', (red, green, blue) => {
 var code s = red + green + blue;
  co
  console.log(codesColors);
});

// Cerrar la app
const closeList = document.getElementById('closeList');

closeList.addEventListener('click', () => {
  listColor.style.display = 'none';
  alert('See you later, it was a pleasure helping you with your selection 🖐️');
  codeSelection.style.display = 'none';
  contentInit.style.display = 'block';
  closeList.style.display = 'none';
});

