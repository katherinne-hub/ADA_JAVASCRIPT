const { error, log } = require('console');
const fs = require ('fs');

//definimos la ruta del archivo json que vamos a manipular
const rutaArchivo = './productos.json';

//paso 1: leer el archivo json
fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
    if (error) {
        console.error('Error al leer el archivo', err)
        return //detiene la ejecucion del programa 
    }

    //convertimos el contenido del archivo json texto a un objeto javascript utilizando JSON.parse
    const productos = JSON.parse(data);
    console.log('Productos actuales: ', productos);

    //paso 2: agregar un nuevo producto al listado 
    // creamos un objeto que representa el nuevo producto
    const nuevoProducto = {
        "id": productos.length + 1,
        "nombre": "Webcam",
        "precio": 40
    }

    //Agregamos el nuevo producto al listado al array de productos existente
    productos.push(nuevoProducto);
    console.log('Productos actualizados:', productos);

    //paso 3: Escribir al archivo json actualizado
    //convertimos el objeto javascript a texto utilizando JSON.stringify
    const contenidoActualizado = JSON.stringify(productos, null, 2)

    //escribimos el nuevo contenido actualizado al archivo y mostramos el error por consola
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
        if(err) {
            console.error('Error al escribir en el archivo:', err)
            return
        }
        console.log('Archivo actualizado correctamente');

    })

});