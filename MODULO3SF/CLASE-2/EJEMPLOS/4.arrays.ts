// DECLARAMOS UN ARRAY SIMPLE
let frutas: string[] = ["Manzana", "Banana", "Naranja"];

// UTILIZAMOS DIFERENTES METODOS DE ARRAY
frutas.push("Mango"); // Agrega un elemento al final
console.log("Después de push:", frutas);

// Eliminamos el último elemento
let ultimaFruta = frutas.pop();
console.log("Después de pop:", frutas, "Elemento eliminado:", ultimaFruta);

// COMBINAMOS TODOS LOS ELEMENTOS DEL ARRAY EN UNA CADENA
let stringDeFrutas = frutas.join(",- ");
console.log("Combinamos todos los elementos del Array en una cadena:", stringDeFrutas);

