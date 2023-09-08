'use strict'

// Plantillas JavaScript

var nombres = prompt("Introduce tu (s) nombre (s)");

var apellidos = prompt("Introduce tu (s) apellido (s)");

var texto = "Mi nombre es: " +nombres+ " <br/> Mis apellidos son: ";

var texto = `
<h1>🖐️ Bienvenido (a)</h1>
<h3>${nombres}</h3>
<h3>${apellidos}</h3>
<h4>Es un gusto saludarte 😊</h4>
`;
document.write(texto);

