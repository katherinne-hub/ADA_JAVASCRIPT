// - ¡Viaje a la fiambrería!
const prompt = require("prompt-sync")({ sigint: true });

// comprar 150 gramos de queso a mi fiambrería de confianza,





// 7.¡nos olvidamos la plata antes de salir! Por suerte, tenemos confianza y nos fía.Deuda con Mónica (número)
let cuanta = parsefloat(("Deuda actual con monica? en pesos: $ "));
// 8. Ya podemos volver a casa a disfrutar de nuestro tentempié.

// condicionles clima:
// 1. Temperatura determinar la ropa. (número)
let clima = parseFloat( prompt("Hola buen dia ¿cual es la temperatura de hoy:?"));

if (clima < 15)  {
    console.log (`El clima esta fresco lleva un abrigo `);
} else if (clima >= 15 ) {
    console.log (`El clima esta agradable podes ir con remera`);
} else {
    console.log (`El clima esta templado ponete algo ligero `);
}

// condicionles pronostico:
// 2. atención a si llueve o no llueve.¿Está lloviendo? (booleano)
let lluvia = prompt("Èn el dia de hoy esta pronisticado lluvias? si, no o puede ser: ") === "si";
let lluvia2 = "puede ser"
if (lluvia) {
    console.log("Podes salir trankilo hoy no esta pronisticado lluvias.");
if ( lluvia2) {
    console.log("Podes salir con un piloto.");
} else {
    console.log("Podes salir con un pan.");
}
} else {
    console.log("Está lloviendo, no olvides llevar un paraguas.");

}

// condicionles horario:
// 3. antes de salir saber si la fiambrería va a estar abierta. Hora actual (número)
let horaActual = parseFloat ( prompt("Ingresa la hora actual: formato AM - PM "));
// 4. Hora de apertura de la fiambrería (número)
const apertura = 9
// 5. Hora de cierre de la fiambrería (número)
const cierre = 20

if (horaActual < cierre || horaActual > apertura) {
    console.log("La fiambreria de monica se encuentra cellada");
} else {
    console.log("La fiambreria de Monica se ecncuentra abierta");

}

//  Mónica (mi fiambrera de confianza) sabe que siempre llevo 100 gr. de Queso Dambo
// 6. Cantidad de queso (número)
let cantidad = 150

// 7.¡nos olvidamos la plata antes de salir! Por suerte, tenemos confianza y nos fía.Deuda con Mónica (número)
console.log("Compraste "+ cantidad + "cantidad de queso: " );
deuda += cantidad * 0,5;




console.log("Tu nueva deuda de la compra realizada en la fiambrefia Monica es: "+ deuda );

console.log("Disfruta de tus productos que tengas un exelente dia... ");
