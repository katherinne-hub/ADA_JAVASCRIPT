const prompt = require("prompt-sync")({ sigint: true });
/* Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.*/
let num1 = parseFloat( prompt ("ingrese un numero: "));
let num2 = parseFloat( prompt ("ingrese un segundo numero: "));
 if (num1 > num2) {
    console.log("El primer numero es mayor");
 } else if (num1 < num2){
    console.log("El primer numero es menor");

 } else {
    console.log("los numero son iguales");
 }