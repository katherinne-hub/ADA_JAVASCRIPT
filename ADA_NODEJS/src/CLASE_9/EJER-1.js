//DESAFÍO 1: Cliente con Reconexión Automática
//Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
//conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
//El cliente debe:
//Conectarse al servidor en el puerto 5000.
//Enviar un mensaje inicial: "¡Hola, servidor!".

//Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
//Escuchar y manejar 'error', mostrando el mensaje en consola.

const net = require('net');
const PORT = 5000;
const HOST = 'localhost';
// const client = net.createConnection({port: PORT, host: HOST}, () => {
//     console.log('Conectado al servidor');
//     client.write('Hola servidor!');
//     client.setTimeout(3000);
//     client.on('timeout', () => {
//     })
    
// })
const client = net.createConnection({port: PORT, host: HOST});
client.on('connect', () => {
    console.log('Conectado al servidor');
    client.write('Hola servidor!');
})

ClientRequest.on('error', (error) => {
    console.log('error', error);
    ClientRequest.end();

})

ClientRequest.on