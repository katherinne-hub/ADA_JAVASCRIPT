//función prompt() para solicitar el dato al usuario.
const prompt = require("prompt-sync")({ sigint: true });
  
// Solicita al usuario que ingrese un número
let numero = parseFloat( prompt ("ingrese un numero para saber el doble del numero ingresado: "));

  // Calcula el doble del número con un operador aritmético.
let doble = numero * 2 ;

  // Muestra el resultado en la consola
console.log(`el doble del numero ingresado es ${numero} es ${doble}`); 
