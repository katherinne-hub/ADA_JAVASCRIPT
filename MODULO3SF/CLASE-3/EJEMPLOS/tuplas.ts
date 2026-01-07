// DECLARACION DE UNA TUPLA 
let persona: [string, number, boolean];

// INICIALIZACION DE LA TUPLA
persona = ["Juan", 30, true];
console.log("Datos de la persona:", persona);


// ACCESO A LOS ELEMENTOS DE LA TUPLA
console.log("Nombre:", persona[0]);
console.log("Edad:", persona[1]);
console.log("¿Es empleado?:", persona[2]);

// MODIFICACION DE LOS ELEMENTOS DE LA TUPLA
persona[1] = 31; // Actualizando la edad
console.log("Edad actualizada:", persona[1]);   

// DESESTRUCTURACION DE LA TUPLA SEPARA CADA VARIABLE
export let [nombre, edad, esEmpleado] = persona;
console.log(`Nombre: ${nombre}, Edad: ${edad}, ¿Es empleado?: ${esEmpleado}`);

// tuplas con tipo rest: usando el operador ... para definir una tupla con un número variable de elementos
type TuplaNumeros = [string, ...number[]]; // PRIMER ELEMENTO STRING Y EL RESTO NUMEROS
let datos: TuplaNumeros = ["Números", 1, 2, 3, 4, 5]; // INICIALIZACION DE LA TUPLA con tipos rest y varios numeros
console.log("Tupla con tipos rest:", datos);
console.log("-------------");

// Acceso a los elementos de la tupla con tipos rest
console.log("Primer elemento (string):", datos[0]);
console.log("Elementos numéricos:", datos.slice(1)); // Usamos slice para obtener los elementos numéricos
console.log("-------------");

