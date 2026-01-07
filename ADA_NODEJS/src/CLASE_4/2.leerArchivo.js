// PASO 1: Importamos el modulo fs
const fs = require('fs');

// 1 Argumento: Archivo a leer, si el archivo no esta en el mismo directorio, colocar la ruta
// 2 Argumento: la codificacion, utf-8 es la (Unicode Transformation Format 8bits) y es una codificacion de caracteres que se utilizan para presentar texto en computadoras y en la web
// 3 Argumento - Callback: 
// A Parametro 1: Error, un objeto de error que indica si algo salio mal durante la lectura del archivo 
// B Parametro 2: Data, contiene el contenido del archivo leido si no hubo error   
fs.readFile('archivo.txt', 'utf-8', function (err, data) {
    if (!err) { // Si no hay error, mostramos los datos 
        console.error(data);
    } else {
        throw err
    }

})