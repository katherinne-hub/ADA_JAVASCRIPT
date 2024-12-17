const prompt = require("prompt-sync")({ sigint: true });

//crear un progrma para la Suma de dos números ingresados por el usuario
//• Utiliza parseFloat() para convertir las entradas a números.
//• Utiliza prompt() para recibir los números.

//1. Pida al usuario que ingrese dos números.
let num1 = parseFloat(prompt( "Ingrese el primer numero para sumar: ")); 
let num2 = parseFloat(prompt( "Ingrese el segundo numero para sumar: ")); 

//3. Muestre el resultado de la suma.
let suma = num1 + num2;
console.log(`La suma de tu numero ${num1}: y ${num2}: Total: ${suma}`);

