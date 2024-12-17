   // función prompt() para solicitar el dato al usuario.
const prompt = require("prompt-sync")({ sigint: true });
   
   // 1. Pida al usuario que ingrese un número.
let numero = parseFloat(prompt("Ingrese un numero: "));
   
   // 2. Verifique si el número es positivo, negativo o igual a cero.
if ( numero > 0) {
    console.log ("El numero ingresado es positivo.")

} else if (numero < 0) {
    console.log ("El numero ingresado es negativo.")

} else {
    console.log("El número es igual a cero."); // 3. Muestre un mensaje indicando cuál es el caso.
}
   

