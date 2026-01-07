// 1. ALIAS DE TIPOS PRIMITIVOS
// 2. ALIAS PARA TIPOS BASICO O PRIMITIVOS (COMO NUMER, STRING, BOOLEAN)
type ID = number; // Alias para tipo number(EL ID VA A SER UN NUMERO)
type Nombre = string; // Alias para tipo string (EL NOMBRE VA A SER UN STRING)
type Activo = boolean; // Alias para tipo boolean (EL ACTIVO VA A SER UN BOOLEAN)

// USOS PARA ALIAS 
let usuarioId: ID = 123; // VARIABLE DE TIPO ID (NUMBER)
let usuarioNombre: Nombre = "Ana"; // VARIABLE DE TIPO NOMBRE (STRING)
let usuarioActivo: Activo = true; // VARIABLE DE TIPO ACTIVO (BOOLEAN)
console.log(`ID: ${usuarioId}, Nombre: ${usuarioNombre}, Activo: ${usuarioActivo}`);
console.log("-------------");

// 2. ALIAS DE TIPO OBJETOS (declaramos tipos personalizados para objetos)
type direccion = {
    calle: string; //PROPEDAD CALLE DE TIPO STRING
    ciudad: string; //PROPEDAD CIUDAD DE TIPO STRING
    codigoPostal: number; //PROPEDAD CODIGO POSTAL DE TIPO NUMBER
};

// USO PARA ALIAS DE OBJETOS (usamos el alias para definir el tipo de un objeto para esas propiedades)
let miDireccion: direccion = {
    calle: "Calle Falsa 123",
    ciudad: "Springfield",
    codigoPostal: 12345,
};
console.log(`Calle: ${miDireccion.calle}, Ciudad: ${miDireccion.ciudad}, Código Postal: ${miDireccion.codigoPostal}`);
console.log("-------------");

// 3. ALIAS PARA UNIONES DE TIPOS (combinación de varios tipos)
type Resultado = "Exito" | "Error" | "Pendiente"; // Alias para una unión de tipos literales
type IDUsuario = string | number; // Alias para una unión de tipos (string o number)

// USAMOS EL ALIAS RESULTADO Y IDUSUARIO 
let estadoOperacion: Resultado = "Exito"; // VARIABLE DE TIPO RESULTADO
let idUsuario1: IDUsuario = 456; // VARIABLE DE TIPO IDUSUARIO (NUMBER)
let idUsuario2: IDUsuario = "user_789"; // VARIABLE DE TIPO IDUSUARIO (STRING)
console.log(`Estado de la operación: ${estadoOperacion}`);
console.log(`ID Usuario 1: ${idUsuario1}, ID Usuario 2: ${idUsuario2}`);
console.log("-------------");
    
// 4. ALIAS PARA FUNCIONES (definimos el tipo de una función)
type OperacionMatematica = (a: number, b: number) => number; // Alias para una función que recibe dos números y retorna un número

// IMPLEMENTACION DE FUNCIONES QUE SIGUEN EL ALIAS OPERACIONMATEMATICA
export const sumar: OperacionMatematica = (a, b) => a + b; // FUNCIÓN SUMAR
export const restar: OperacionMatematica = (a, b) => a - b; // FUNCIÓN RESTAR

console.log(`Suma: ${sumar(5, 3)}`); // USO DE LA FUNCIÓN SUMAR
console.log(`Resta: ${restar(10, 4)}`); // USO DE LA FUNCIÓN RESTAR
console.log("-------------");

// 5. ALIAS PARA ARRAYS (definimos el tipo de un array)
type ListaDeNumeros = number[]; // Alias para un array de números
type ListaDeNombres = Array<string>; // Alias para un array de strings

// USO DE ALIAS PARA ARRAYS
let numeros: ListaDeNumeros = [1, 2, 3, 4, 5]; // VARIABLE DE TIPO LISTADENUMEROS
let nombres: ListaDeNombres = ["Ana", "Luis", "Carlos"]; // VARIABLE DE TIPO LISTADENOMBRES

console.log(`Números: ${numeros.join(",- ")}`); // IMPRIMIMOS EL ARRAY DE NUMEROS CON JOIN PARA SEPARARLOS POR COMAS
console.log(`Nombres: ${nombres.join(",- ")}`); // IMPRIMIMOS EL ARRAY DE NOMBRES
console.log("-------------");
