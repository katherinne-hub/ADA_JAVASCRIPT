const prompt = require('prompt-sync')();

let dianmero = 9;
let dianombre; //declarar valor para que me guarde el dia 

switch (dianmero) {
    case 1:
        dianombre ="Lunes";
        break;
    case 2:
        dianombre ="Martes";
        break;
    case 3:
        dianombre ="Miercoles";
        break;
    case 4:
        dianombre ="Jueves";
        break;
    case 5:
        dianombre ="Viernes";
        break;  
    case 6:
        dianombre ="Sabado";
        break;     
    case 7:
        dianombre ="Domingo";
        break;
    default: // si default no es ni del : 1 al 7
        dianombre = "Numero invalido debe de ser del 1 al 7 ";
 
}
//paso 3: Imprimo en consola 
console.log(dianombre);