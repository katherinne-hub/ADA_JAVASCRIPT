"use strict";
/*   ---- Ejercicio 1:
Declarar y asignar tipos primitivos
Crea un programa en TypeScript donde se declaren variables para almacenar tu
nombre, edad y si eres estudiante, utilizando los tipos de datos correctos.
Luego, imprime esos valores en la consola.-*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.nombre = void 0;
// Declaración de variables con tipos primitivos
exports.nombre = "Katherinne";
let edad = 34;
let esEstudiante = true;
console.log("Nombre:", exports.nombre);
console.log("Edad:", edad);
console.log("Es estudiante de Ada?:", esEstudiante);
console.log("------------");
/* ---- Ejercicio 2:
   Modifica el valor de una variable
Declara una variable con el tipo any,
asigna inicialmente un valor numérico,
luego cambia su valor por una cadena de texto,
y finalmente imprime ambos valores.
*/
// Declaración de variable con tipo any
let anyValor = 34; // Inicialmente un número
console.log(" valor any N°:", anyValor);
anyValor = "Hola, soy un valor de tipo any"; // Ahora una cadena de texto"
console.log(" valor any:", anyValor);
console.log("------------");
/* ---- Ejercicio 3:
   Combina variables primarias
Declara variables para almacenar tu nombre y edad. Combina esas variables en
un solo mensaje usando plantillas de cadena (template literals) e imprímelo en
la consola.*/
let mensaje = ` Hola, mi nombre es ${exports.nombre} y tengo ${edad} años. `;
console.log(mensaje);
console.log("------------");
/* ---- Ejercicio 4: Parámetros opcionales simulados
Declara dos variables, una para almacenar un nombre y
otra para almacenar una edad. Si la edad no se asigna,
debes imprimir un mensaje que diga "Edad no proporcionada".
Si se asigna la edad, imprímela junto al nombre.
*/
let nombre2 = "Carlos";
let edad2; // Edad no asignada inicialmente
if (edad2 === undefined) {
    console.log(` Nombre: ${nombre2}, Edad no proporcionada. `);
}
else {
    console.log(` Nombre: ${nombre2}, Edad: ${edad2} años. `);
}
console.log("------------");
/* ---- Ejercicio 5:
Datos nulos y diferenciados
Declara una variable de tipo string | null.
Asigna inicialmente un valor de cadena,
y luego cambia su valor a null. Imprime ambos estados en la consola, explicando
el significado de null en TypeScript.*/
let datoNulo = "Este es un valor de tipo string.";
console.log("Valor inicial:", datoNulo);
datoNulo = null;
console.log("Valor después de asignar null:", datoNulo);
console.log("En TypeScript, null representa la ausencia intencional de cualquier valor de objeto.");
console.log("------------");
/* ---- Ejercicio 6:
Uso de unknown
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los
valores.*/
let valorDesconocido;
valorDesconocido = "Hola, soy un valor de tipo unknown";
console.log("Valor asignado (string):", valorDesconocido);
if (typeof valorDesconocido === "string") {
    console.log("El valor es una cadena de texto (string):", valorDesconocido.toUpperCase());
}
valorDesconocido = 2024;
console.log("Valor asignado (number):", valorDesconocido);
if (typeof valorDesconocido === "number") {
    console.log("El valor es un número (number):", valorDesconocido.toFixed(2)); // Formatear número con dos decimales .toFixed(2) significa dos decimales
}
console.log("------------");
/*Ejercicio 10: Uso de objetos
Declara un objeto en TypeScript con propiedades de tipo string, number y
boolean. Accede a estas propiedades e imprímelas en la consola. */
