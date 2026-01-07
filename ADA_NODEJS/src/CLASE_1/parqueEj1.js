const prompt = require('prompt-sync')();

/*
Ejercicio 1:
Tienes un parque de diversiones que permite la entrada
 a personas mayores de 12 años y menores de 60. 
Escribe una función que reciba 
una lista de edades y 
devuelva cuántas personas pueden entrar al parque.
Consigna:
• Usa un bucle for y condicionales.
• Usa un array como entrada de la función.
• Devuelve el número de personas que cumplen con los requisitos.
*/

function personasQuePuedenEntrar(edades) { //funcion que recibe un array de edades
    let edadesPermitidas = 0; //contador de edades permitidas

    for (let i = 0; i < edades.length; i++) { //ciclo for que recorre el array de edades 
        if (edades[i] > 12 && edades[i] < 60) { //condicion que evalua si la edad es mayor a 12 y menor a 60
            edadesPermitidas++; //si cumple la condicion se incrementa el contador de edades permitidas
        } //fin del if
    } //fin del for
    return edadesPermitidas;//return edadesPermitidas; //return no es necesario
} //fin de la funcion

 //llamada a la funcion que recibe el array de edades 
let edades = [10, 15, 35, 65, 12, 59]; //Array de edades
console.log(personasQuePuedenEntrar(edades));
//imprime al consola el resultado de la funcion 