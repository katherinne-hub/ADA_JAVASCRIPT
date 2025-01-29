const prompt = require('prompt-sync')();

/*Ejercicio 2: El menú del día 🍽️
Escribe una función que reciba un objeto con platos y precios, y devuelva
los platos cuyo precio sea menor a $20.
Consigna:
• Usa un bucle for...in.
• Usa objetos y arrays. */

function platosBaratos(menu) {
    let platosEconomicos = []; //array que contendra los platos economicos 
    
    for (let plato in menu) { //ciclo for in que recorre el objeto menu 
        if (menu[plato] < 20) { //condicion que evalua si el precio del plato es menor a 20
          platosEconomicos.push(plato); //si cumple la condicion se agrega el plato al array de platps ecpnomicos
        } //fin del if
    } //fin del for
    return platosEconomicos; //return platosEconomicos; 
} //fin de la funcion

let menu = { //objeto menu con platos y precios}
    "Ensalada": 15,
    "sopa": 8,
    "carne": 25,
    "pastas": 18

}; //fin del objeto menu
console.log(platosBaratos(menu)); //imprime al consola el resultado de la funcion 
//llamada a la funcion que recibe el objeto menu
