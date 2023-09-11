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



/*Nombre de color HTML / CSS	Código hexadecimal

var ColorAmarillosClaros = [['Amarillo Claro[#FFFFE0]','Gasa De Limón[#FFFACD]','Dorado 
 claro[#FAFAD2]','papaya[#FFEFD5]','mocasín[#FFE4B5]','melocotón[#FFDAB9]',
'varilla de oro pálido[#EEE8AA]','caqui[#F0E68C]','caqui oscuro[#BDB76B]','amarillo[#FFFF00]','aceituna[#808000]','verde amarillo[#ADFF2F]','amarillo verde[#9ACD32']];	
*/


/*
Color Nombre de color Código hexadecimal
 	'Amarillo oscuro1'	# CCCC00	
 	'Amarillo oscuro2'	# 999900	
 	'Amarillo oscuro3'	# 666600	
 	'Amarillo oscuro4'	# 333300	 


 	'Amarillo claro1'[#FFFFCC] 
 	'Amarillo claro2'[# FFFF99]	
 	'Amarillo claro3'[# FFFF66]	 
 	'Amarillo claro4'[# FFFF33]	 
 	Amarillo #FFFF00	 


*/






















