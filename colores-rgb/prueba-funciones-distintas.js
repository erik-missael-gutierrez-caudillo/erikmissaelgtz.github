// Seleccionar elementos

const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

// Texto en párrafos 

// Seleccionar los elementos con los valores
const textRed = document.getElementById('textRed'); // valor de inicio 23
const textGreen = document.getElementById('textGreen');  // valor de inicio 56
const textBlue = document.getElementById('textBlue');  // valor de inicio 41

// Variables para extraer el valor del input
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

// Variables para reemplazar valores obtenidos
// Actualizar el valor de los párrafos
textRed.innerText = red;
textGreen.innerText = green;
textBlue.innerText = blue;


// Función para actualizar el color 
function actualizarColor (red, green, blue) {
  // Reemplazar el valor de las variables --> ${}
  const colorRGB = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = colorRGB;
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
  green = e.target.value;
  textGreen.innerText = green;
  actualizarColor(red, green, blue);
});


// Para actualizar el color azul
inputBlue.addEventListener('change', (e) => {
  blue = e.target.value;
  textBlue.innerText = blue;
  actualizarColor(red, green, blue);
});

const button = document.getElementById('button');
let codeColor1 = document.getElementById('codeColor1');

const cuestionOne = document.getElementById('cuestionOne');

const container = document.getElementById('container');

button.addEventListener('click', () => {
container.style.display = 'none';
cuestionOne.style.display = 'flex';
codeColor1.textContent = 'Código de color rgb(' + red + ',' + green + ',' + blue + ')';
// Código del color añadido
// Usar esta variable para realizar la lista de colores completa
let ColorOneSelect = codeColor1.innerText;
console.log(ColorOneSelect);
return ColorOneSelect;
})

// Respuesta Si
let codeColor2 = document.getElementById('codeColor2')
const yes = document.getElementById('yes');
yes.addEventListener('click', () => {
  container.style.display = 'flex';
  cuestionOne.style.display = 'none';
  
button.addEventListener('click', () => {
container.style.display = 'none';
cuestionOne.style.display = 'flex';
// Código del color añadido
// Usar esta variable para realizar la lista de colores completa
codeColor2.textContent = 'Código de color rgb(' + red + ',' + green + ',' + blue + ')';
let ColorTwoSelect = codeColor2.textContent;
console.log(ColorTwoSelect);
return ColorTwoSelect;
})
});


let listColor = document.getElementById('listColor');
let codeSelection = document.getElementById('codeSelection');
const now = document.getElementById('now');

// Respuesta es NO
now.addEventListener('click', () => {
  listColor.style.display = 'flex';
  container.style.display = 'none';
  cuestionOne.style.display = 'none';
  codeSelection.style.display = 'flex';
  codeSelection.innerText = 'Código de color rgb(' + red + ',' + green + ',' + blue + ')';
  return codeSelection;
});
 
const closeList = document.getElementById('closeList');

closeList.addEventListener('click', () => {
  listColor.style.display = 'none';
  alert('See you later, it was a pleasure helping you with your selection 🖐️');
  container.style.display = 'flex';
})

// Segunda elección 






























