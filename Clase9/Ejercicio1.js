
const prompt = require('prompt-sync')();
let num1 = parseFloat( prompt ("ingrese un numero: "));
let num2 = parseFloat( prompt ("ingrese un segundo numero: "));
 if (num1 > num2) {
    console.log(`El ${num1} primer numero es mayor`);
 } else if (num1 < num2){
    console.log("El primer numero es menor");

 } else {
    console.log("los numero son iguales");
 }