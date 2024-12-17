const prompt = require("prompt-sync")({sigint: true});
let numero = prompt("ingrese un numero: ");
if (let i = 0; i < 7; i++){
    console.log(`si tu numero es ${i+1} : ${numero}`);
}