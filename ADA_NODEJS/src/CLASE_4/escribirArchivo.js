//Paso 1: Importar el modulo fs
const fs = require('fs');

//Paso 2: configurar la variables de nombre datos que contiene los datos a persistir guardar
datos = "Ejemplo de datos que podamos escribir en un archivo" 

//Paso 3: utilizamos el mdulo fs writefile que nos permite escribir datos en un archivo
//1. Wf crea el archivo por nosotras, el nombre de dicho archivo lo pasamos como primer parametro 
//2. Segundo parametro es donde guardamos los datos, en este caso es una variable 
//3. Tercer parametro hace refercia a que hacer si ocurre un error. En el caso de error, va a dar lugar a que se lance el error con un msj determinado  

fs.writeFile('archivo.txt', datos, function (err) {
    if (!err) {
        console.log('Los datos han sido escritos a archivos.txt');
    } else {
        throw err
    }
})

//Paso 4: / EXTRAS:
//Errores: En este tipo de archivos tiene que ver principalmente con intentan escribir 
//en un archivo dentro del directorio en el cual no tenemos permisos para escribir.

//Donde se guarda el archivo: El archivo se va a guardar exactamente en el mismo lugar donde
//se encuentre el escrip que se ejecuta. En este caso, el archivo se va a guardar en otra ruta tenemos que
// indicar antes de el nombre 'archivo.txt'(la ruta completa )

// throw : se utiliza para lanzar una esepcion que es una forma de manejar errores o cituaciones exepcionales en el codigo
//Cuando se usa el trow, podemos detener la ejecucion normal del codigo y tranferirel el control
// o un bloque de codigo que maneja el error, normalmente es un bloque try-catch 