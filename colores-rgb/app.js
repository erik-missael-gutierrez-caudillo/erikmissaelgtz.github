// Inicio de app
const on = document.getElementById('on')
// Div contenedor
const contentInit = document.getElementById('contentInit');

const  start = document.getElementById(' start');

 start.addEventListener('click', () => {
  contentInit.style.display = 'flex';
  on.style.display = 'none';
});

const container = document.getElementById('container');

contentInit.addEventListener('click', () => {
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
inputBlue.addEventListener('change', (e) => {
  let blue = e.target.value;
  textBlue.innerText = blue;
  actualizarColor(red, green, blue);
});

// Añadir el código de color 
let addColor = document.getElementById('addColor');

addColor.addEventListener('click', ()=> {
  document.getElementById('codeColor').innerText = 'Your last color selected : rgb(' +inputRed.value+',' +inputGreen.value+ ',' +inputBlue.value+ ')';
  console.log('Code color rgb(' +inputRed.value+',' +inputGreen.value+ ',' +inputBlue.value+ ')')
  document.getElementsByClassName('newColor').textContent = 
  'Add code color rgb (' +inputRed.value+ ',' +inputGreen.value+ ',' +inputBlue.value+ ') to your Selection';
})
const newColor = Array.from(document.querySelectorAll('.newColor'));
console.dir(newColor);


const send = document.getElementById('send');

send.addEventListener('click', () => {
  listColor.style.display = 'flex';
  contentInit.style.display = 'none';
  container.style.display = 'none';
})

// Cerrar la app
const closeList = document.getElementById('closeList');

closeList.addEventListener('click', () => {
  listColor.style.display = 'none';
  alert('See you later, it was a pleasure helping you with your selection 🖐️');
  on.style.display = 'block';
  closeList.style.display = 'none';
});

