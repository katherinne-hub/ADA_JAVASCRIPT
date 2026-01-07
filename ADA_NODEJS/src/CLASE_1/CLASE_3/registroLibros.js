/* Registro de libros favoritos
Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un
programa que permita registrar libros favoritos en un archivo JSON.
Implementa las siguientes funciones:
1. Agregar un libro: Se debe agregar un libro a la lista de favoritos.
Para esto, el libro tendrá solo un campo: su nombre.
2. Listar los libros: Muestra todos los libros registrados. Pistas:
• Usa un archivo JSON para guardar los libros.
• Si el archivo no existe, comienza con un arreglo vacío. */

//PASO 1: IMPORTAMOS MODULOS
const fs = require ('fs');
const filePath = './libros.json';

//PASO 2: CREAMOS FUNCION PARA AGREGAR Y LEER UN LIBRO
//funcion para leer los libros en el archivo a agregar
const leerLibros = () => {
    //si el archivo no existe, CREAMOS UN ARCHIVO VACIO CON UN ARREGLO VACIO
    if (!fs.existsSync(filePath)) { //verificamos si el archivo existe
        fs.writeFileSync(filePath, '[]')// creamos un archivo vacio con un arreglo
    }
    const contenido = fs.readFileSync(filePath, 'utf-8'); //LEEMOS EL ARCHIVO JSON
    return JSON.parse(contenido); //combertimos el contenido a un arregle de libros
};

// PASO 3: FUNCION PARA ESCRIBIR LOS LIBROS EN EL ARCHIVO JSON
//funcion para escribier los libros en el archivo
const escribirLibros =(libros) => {
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2)); //escribimos los libros en el archivo 
}

//PASO 4: FUNCION PARA AGREGAR UN LIBRO 
//funcion para agregar un libro
const agregarLibro = (nombreLibro) => {
    const libros = leerLibros(); //leemos los libros existente
    libros.push({id: libros.length + 1, nombre: nombreLibro}); //agregar un nuevo libro
    escribirLibros(libros); //agregar la lista actualizasa
    console.log(`libro agregado correctamente: ${nombreLibro}`);
}

//PASO 5:funcion para listar los libros
const listarLibros = () => {
    const libros = leerLibros(); //leemos los libros existentes
    console.log('Listas de libros favoritos: ');
    libros.forEach(libro => {
        console.log(`${libro.id} - ${libro.nombre}`)
    })
}

//PASO 6: Hacer un ejemplo de uso de las interacciones de las funciones
agregarLibro('El principito');
agregarLibro('Cien años de soledad');
agregarLibro('El fantasna de canterville');
listarLibros();