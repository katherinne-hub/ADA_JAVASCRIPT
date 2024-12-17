// programa: Determinar si un número es par o impar operadores aritméticos y condicionales.
const prompt = require("prompt-sync")({ sigint: true });

// 1. Solicite al usuario que ingrese un número entero.
let num1 = parseFloat( prompt("ingrese un numero entero: "));

// 2. Determine si el número es par o impar.
// Utiliza el operador módulo (%) para comprobar si el número es divisible por 2.
if ( num1 % 2 === 0) {
    console.log(`El numero ingresaso: ${num1} es par.`);

    // 3. Muestre un mensaje indicando si el número es par o impar.
} else {
    console.log(`El numero ingresaso: ${num1} es impar. `);
}
