const prompt = require("prompt-sync")({ sigint: true });
//while
console.log("contador regresivo usando whail.")
let contador = 5;
while (contador >=1) {
    console.log(contador);
    contador--
}

//do while
console.log (`contador regresivo usando do while.`);

let contador2 = 5;

do {
    console.log(contador2);
    contador2--;
} while(contador2 >= 1);