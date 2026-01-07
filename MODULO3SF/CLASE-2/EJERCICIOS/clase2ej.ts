        //---Actividades:

/*---- Ejercicio 1: Declarar y usar funciones con tipos
Consigna: Crea una función llamada multiplicarNumeros que acepte dos
parámetros, ambos de tipo number, y retorne el producto de ambos números.
Luego, muestra el resultado en consola llamando a la función. */
function multiplicarNumeros(a: number, b: number): number {
        return  a * b;
}
console.log(multiplicarNumeros(1000 , 2500));
console.log("-------------");


/*---- Ejercicio 2: Uso de funciones con parámetros opcionales
Consigna: Define una función llamada saludar que acepte un parámetro nombre
de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es
proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y
muestra el resultado en la consola. */
export function saludar(nombre: string, saludo: string = "Hola"): string {
        return saludo + "," + nombre + "!";
}
console.log(saludar("Geovanni"));
console.log(saludar("Geovanni", "Buenas noches"));
console.log("-------------");


/*---- Ejercicio 3: Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
(string), deporte (string), y energia (number). Luego, define una función entrenar
que acepte el objeto deportista y un número de horas de entrenamiento,
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
final, muestra el estado del deportista en la consola. */
let deportista = {
    nombre: "Lionel Messi",
    deporte: "Futbol",
    energia: 100
};
function entrenar(deportista: {nombre: string, deporte: string, energia: number}, horas: number): void {
    deportista.energia -= horas * 5;
    console.log(`El deportista ${deportista.nombre} tiene ahora ${deportista.energia} de energía.`);
}
entrenar(deportista, 4);7
console.log("-------------");
// otra opcion seria
let deportistaB = {
        nombre: "Carlos",
        deporte: "Fútbol",
        energia: 100
    };
    function entrenarB(deportistaB: { nombre: string, deporte: string, energia: number }, horas: number): void {
        deportistaB.energia -= horas * 5;
        console.log(`${deportistaB.nombre} ha entrenado por ${horas} horas. Energía restante: ${deportista.energia}`);
    }
        entrenarB(deportistaB, 3); // Llama a la función con 3 horas de entrenamiento
console.log("-------------");

// explicacion
// 1️⃣ Creamos un objeto con sus propiedades
let deportista1 = {
    nombre: "Lionel Messi",  // string
    deporte: "Fútbol",       // string
    energia: 100             // number
  };
  
  // 2️⃣ Definimos una función llamada 'entrenar'
  function entrenar1(
    deportista1: { nombre: string, deporte: string, energia: number }, // parámetro: un objeto con esas propiedades
    horas: number                                                     // parámetro: cantidad de horas de entrenamiento
  ): void {  // 👉 el tipo 'void' indica que la función NO devuelve ningún valor
  
    // 3️⃣ Resta energía al deportista (5 puntos por cada hora)
    deportista1.energia -= horas * 5;
  
    // 4️⃣ Muestra en consola el resultado
    console.log(`El deportista ${deportista1.nombre} tiene ahora ${deportista1.energia} de energía.`);
  }
  
  // 5️⃣ Llamamos a la función y le pasamos:
  //     - el objeto 'deportista'
  //     - el número de horas
  entrenar1(deportista1, 4);
  
  // 6️⃣ Mostramos una línea separadora en la consola
  console.log("-------------");
  
  // 7️⃣ Mostramos cómo quedó el objeto después del entrenamiento
  console.log(deportista1);
console.log("-------------");  


/*---- Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
titulo (string), autor (string) y paginas (number). La función debe devolver un
objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola. */
function crearLibro(titulo: string, autor: string, paginas: number): {titulo: string, autor: string, paginas: number} {
    return {
        titulo: titulo,
        autor: autor,
        paginas: paginas
    };
}

const libro1 = crearLibro("Cien Años de Soledad", "Gabriel García Márquez", 417);
const libro2 = crearLibro("1984", "George Orwell", 328);

console.log(libro1);
console.log(libro2);
console.log("-------------");

/*---- Ejercicio 5: Función con parámetros rest
Consigna: Crea una función llamada sumarTodos que acepte una cantidad
indefinida de números y devuelva su suma. Luego, llama a la función con varios
números y muestra el resultado en la consola. */
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0); // Suma todos los números con reduce, desde 0, el acumulador indica y hace la suma 
} 
console.log(sumarTodos(10, 20, 30, 40, 50)); // Llama a la función con varios números y muestra el resultado
console.log("-------------");
console.log(sumarTodos(5, 15, 25)); // Llama a la función con varios números y muestra el resultado
console.log("-------------");


/*---- Ejercicio 6: Tipos de parámetros y funciones que retornan objetos
Consigna: Crea una función llamada crearPersona que acepte tres parámetros:
nombre (string), edad (number), y pais (string). La función debe devolver un
objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la
consola. */
function crearPersona(nombre: string, edad: number, pais: string) : {nombre: string, edad: number, pais: string} // Tipo de funcion que retorna un objeto puede ser any o especifico 
{
    return {
        nombre: nombre,
        edad: edad,
        pais: pais
    };
} 
const persona = crearPersona("Ana", 28, "Argentina");
console.log(persona);
console.log("-------------");


/*----Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto
empleado con las propiedades nombre (string) y salario (number), y un número
que represente el porcentaje de aumento. La función debe aumentar el salario
del empleado y devolver el nuevo salario. Muestra en la consola el resultado. */
function aumentarSalario(empleado: {nombre: string, salario: number}, porcentaje: number): number {
    empleado.salario += empleado.salario * (porcentaje / 100);
    return empleado.salario;
}
const empleado = {nombre: "Juan", salario: 50000};  
const nuevoSalario = aumentarSalario(empleado, 10);
console.log(`El nuevo salario de ${empleado.nombre} es: ${nuevoSalario}`);
console.log("-------------");


/*---- Ejercicio 8: Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
función debe retornar el área de la figura. Usa tipos específicos para cada caso. */
function calcularArea(figura: "circulo", radio: number): number;
function calcularArea(figura: "rectangulo", largo: number, ancho: number): number;
function calcularArea(figura: string, ...dimensiones: number[]): number { // uso de rest para dimensiones
    if (figura === "circulo") {
        const radio = dimensiones[0]; // primer elemento del array dimensiones
        return Math.PI * Math.pow(radio, 2); // area del circulo math significa pi elevado al radio al cuadrado
    } else if (figura === "rectangulo") {
        const largo = dimensiones[0]; // primer elemento del array dimensiones
        const ancho = dimensiones[1]; // segundo elemento del array dimensiones
        return largo * ancho; // area del rectangulo
    }
    throw new Error("Figura no reconocida"); // error si la figura no es reconocida
}
console.log("Área del círculo con radio 5:", calcularArea("circulo", 5));
console.log("Área del rectángulo 4x6:", calcularArea("rectangulo", 4, 6));
console.log("-------------");


/*---- Ejercicio 9: Funciones con retorno void y manipulación de objetos
Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y
encendido (booleano). Define una función encenderCoche que acepte el objeto
coche y cambie el valor de encendido a true. Muestra el estado del coche en la
consola antes y después de llamar a la función. */
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false
};

function encenderCoche(coche: {marca: string, modelo: string, encendido: boolean}): void {
    coche.encendido = true;
}

console.log("Estado del coche antes de encenderlo:", coche);
encenderCoche(coche);
console.log("Estado del coche después de encenderlo:", coche);
console.log("-------------");


/*---- Ejercicio 10: Funciones y arrays de objetos
Consigna: Crea una función llamada listarLibros que acepte un array de objetos
libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
función debe recorrer el array y mostrar los detalles de cada libro en la consola. */

function listarLibros(libros: {titulo: string, autor: string}[]): void {
    libros.forEach(libro => { // recorre el array de libros con libro como parametro
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}
const biblioteca = [
    {titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez"},
    {titulo: "1984", autor: "George Orwell"},
    {titulo: "El Principito", autor: "Antoine de Saint-Exupéry"}
];
listarLibros(biblioteca);
console.log("-------------");