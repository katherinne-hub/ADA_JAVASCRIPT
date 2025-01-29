const prompt = require('prompt-sync')();
/*
-Ejercicio 2:
a) Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
b) Pide al usuario que ingrese un número y 
c) verifica si está dentro del rango definido por las constantes. */

//ej:A
const RANGO_MINIMO = 50
const RANGO_MAXIMO = 100

//ej:B
let numeroUsuario = parseFloat (prompt("Ingres un numero por favor:"));

//ej:C
if(numeroUsuario >= RANGO_MINIMO && numeroUsuario <= RANGO_MAXIMO){
    console.log(`El numero ${numeroUsuario} esta dentro del ${RANGO_MINIMO} al ${RANGO_MAXIMO} `)

} else {
    console.log(`El numero ${numeroUsuario} esta afuera del ${RANGO_MINIMO} al ${RANGO_MAXIMO}`)
}
