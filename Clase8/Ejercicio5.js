const prompt = require("prompt-sync")({sigint: true });

// Programa: Solicite al usuario que ingrese su nombre.
let nom = prompt("Ingrese su nombre: ");

// 2. Muestre un saludo personalizado usando el nombre ingresado.
console.log(`¡ Hola Bienvenida ${nom} es un gusto poder saludarte! :) `);