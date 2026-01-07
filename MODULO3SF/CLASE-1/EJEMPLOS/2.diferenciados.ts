//1. Any: (Permite almacenar cualquier tipo de dato sin restricciones)
let anyValue: any = "Hola, soy un valor de tipo Any"; //Inicialmente es una cadena de texto
console.log("------------");
console.log("Valor inicial de anyValue:", anyValue);
anyValue = 42; // Ahora es un número
console.log("Valor cambiado de anyValue:", anyValue);
anyValue = {name: "typeScript"}; // Ahora es un objeto
console.log("Valor cambiado de anyValue a objeto:", anyValue);
console.log("------------");

// 2. Unknown: (Similar a any, pero más seguro ya que requiere verificación de tipo antes de usarlo)
let unknownValue: unknown = 100 //"Hola, soy un valor de tipo Unknown"; // Inicialmente es una cadena de texto
console.log("Valor inicial de unknownValue:", unknownValue);

// Hacemos la verificacion de tipo 
if (typeof unknownValue === "string") {
    console.log("unknownValue es una cadena de texto:", unknownValue.toUpperCase());
} else {
    console.log("unknownValue no es una cadena de texto.");
}
console.log("------------");

// 3. Void: (Representa la ausencia de un valor, comúnmente usado en funciones que no retornan nada valor)
function logMessage(message: number): void { // Cambié el tipo de parámetro a number o (09ooostring)
    console.log("Mensaje:", message);
}
logMessage(45476657/*"Hola desde una función con tipo void"*/);
console.log("------------");

// 4. Never: (Representa un valor que nunca ocurre, como una función que siempre lanza un error o nunca termina)
function throwError(message: string): never {
    throw new Error(message);
}
// Descomenta la siguiente línea para ver el error en acción
// throwError("Esto es un error que nunca retorna un valor.");
console.log("------------");

// 5. Null y Undefined: (Representan la ausencia de valor)
let nullValue: null | string = null; // Puede ser null o una cadena de texto
console.log("Valor nullValue inicialmente:", nullValue);
nullValue = "Ahora tiene un valor de cadena de texto.";
console.log("Valor nullValue después de asignar cadena:", nullValue);
console.log("------------");

let undefinedValue: undefined | number; // Puede ser undefined o un número
console.log("Valor undefinedValue inicialmente:", undefinedValue);
undefinedValue = 2024;
console.log("Valor undefinedValue después de asignar número:", undefinedValue);
console.log("------------");

// 6. Object: (Representa un valor que no es un tipo primitivo)
let objValue: object = { tipo: "Objeto", descripcion: "Este es un valor de tipo object." };
console.log("Valor de objValue:", objValue);
console.log("------------");

objValue = [1, 2, 3]; // Ahora es un array 
console.log("Valor de objValue después de asignar un array:", objValue);
console.log("------------");

// 7. Symbol: (Representa un identificador único, incluso si tienen la misma descripción)
let symbol1: symbol = Symbol("MiSímbolo"); 
let symbol2: symbol = Symbol("MiSímbolo");
console.log("¿symbol1 es igual a symbol2?:", symbol1 === symbol2); // Retorna false, porque son únicos
console.log("------------");

// Ejemplo de uso combinado de tipos diferenciados
function processData(valor: any): void {
    if (typeof valor === "string") {
        console.log("Procesando una cadena de texto:", valor.toUpperCase());
    } else if (typeof valor === "number") {
        console.log("Procesando un número:", valor.toFixed(2));
    } else if (valor === null || valor === undefined) {
        console.log("El valor ingresado es null o undefined.", valor);
    } else {
        console.log("El valor ingresado es de otro tipo:", valor);
    }
}
processData("Hola Mundo");
processData(123.456);
processData(null);
processData(undefined);
processData({ clave: "valor" });
console.log("------------");
