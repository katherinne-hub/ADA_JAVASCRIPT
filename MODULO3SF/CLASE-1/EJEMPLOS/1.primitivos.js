"use strict";
// Ejemplos de datos primitivos en TypeScript
//1. String: Cadena de texto
let nombre = "Ada Lovelace";
let saludo = `Hola, mi nombre es ${nombre},bienvenido a TypeScript!`;
console.log("------------");
console.log(saludo);
console.log("------------");
// 2. Number: Números (enteros y flotantes O notacion científica)
let numEntero = 34;
let numFlotante = 3.14;
let numCientifico = 1.5e3; // 1.5 x 10^3 = 1500 notacion científica 100.000
console.log("Número entero:", numEntero);
console.log("Número flotante:", numFlotante);
console.log("Número en notación científica:", numCientifico);
console.log("------------");
// 3. Boolean: (Valores lógicos verdadero o falso)
let esEstudiante = true;
let tieneTrabajo = false;
console.log("¿Es estudiante? :", esEstudiante);
console.log("¿Tiene trabajo? :", tieneTrabajo);
console.log("------------");
// 4. Null: (Ausencia inicial de un Valor, nulo)
let valorNulo = null;
console.log("El Valor es nulo:", valorNulo);
console.log("------------");
// 5. Undefined: (Valor no asignado)
let valorIndefinido = undefined;
console.log("El Valor es indefinido:", valorIndefinido);
console.log("------------");
// 6. Symbol: (Identificador único)
let simbolo1 = Symbol("id");
let simbolo2 = Symbol("id");
console.log("¿Son iguales los símbolos? :", simbolo1 === simbolo2); // false
console.log("------------");
