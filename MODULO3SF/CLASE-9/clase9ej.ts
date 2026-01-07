/*1. Mueblería: Actualización de Precios

En una mueblería, se requiere un sistema que permita actualizar los precios de
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
un identificador único. Implementa las siguientes funciones:
• Añadir un nuevo mueble.
• Actualizar el precio de un mueble después de 3 segundos utilizando
setTimeout().
• Mostrar el inventario de muebles. */

export type mueble = [number, string, number];

let setInteralo: mueble[] = [];
function agregarMueble(id: number, nombre: string, precio: number) {
    inventario.push(nuevoMuevle);
    console.log(`Mueble ${nombre} agregado al inventario.`);
}
function mostrarInventario() {
    console.log("Inventario de muebles:");
    inventario.forEach((mueble) => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    });
}
function actualizarPrecio(id: number, nuevoPrecio: number) {
    setTimeout(() => {
        const mueble = inventario.find((m) => m[0] === id);
        if (mueble) {
            mueble[2] = nuevoPrecio;
            console.log(`Precio del mueble ID ${id} actualizado a $${nuevoPrecio}.`);
        } else {
            console.log(`Mueble con ID ${id} no encontrado.`);
        }
    }, 3000);
}
// Ejemplo de uso
let inventario: mueble[] = [];
agregarMueble(1, "Silla", 50);
agregarMueble(2, "Mesa", 150);
mostrarInventario();
actualizarPrecio(1, 60);
setTimeout(() => {
    mostrarInventario();

}
, 4000);


/* 2. Florería: Envío Programado de Pedidos
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
contener el nombre del cliente, la cantidad de flores y el tipo de flores.
Implementa las siguientes funciones:
• Añadir un pedido.
• Programar el envío de un pedido utilizando setTimeout() para simular un
retraso de 5 segundos.
• Mostrar todos los pedidos pendientes. */
export type pedido = {
    cliente: string;
    cantidad: number;
    tipo: string;
};
let pedidos: pedido[] = [];
function agregarPedido(cliente: string, cantidad: number, tipo: string) {
    const nuevoPedido: pedido = { cliente, cantidad, tipo };
    pedidos.push(nuevoPedido);
    console.log(`Pedido de ${cantidad} ${tipo} para ${cliente} agregado.`);
}
function mostrarPedidos() {
    console.log("Pedidos pendientes:");
     pedidos.forEach((pedido, index) => {
        console.log(
            `${index + 1}. Cliente: ${pedido.cliente}, Cantidad: ${pedido.cantidad}, Tipo: ${pedido.tipo}`
        );
    });
}
function programarEnvio(index: number) {
    setTimeout(() => {
        if (index >= 0 && index < pedidos.length) {
            const pedidoEnviado = pedidos.splice(index, 1)[0];
            console.log(
                `Pedido de ${pedidoEnviado.cantidad} ${pedidoEnviado.tipo} para ${pedidoEnviado.cliente} enviado.`
            );
        } else {
            console.log("Índice de pedido inválido.");
        }
    }, 5000);
}
// Ejemplo de uso
agregarPedido("Ana", 12, "Rosas");
agregarPedido("Luis", 8, "Tulipanes");
mostrarPedidos();
programarEnvio(0);
setTimeout(() => {
    mostrarPedidos();
}, 6000);


/* 3. Compañía de Seguros: Renovación Automática de Pólizas
Desarrolla un sistema que gestione las pólizas de seguros de una compañía.
Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y
una fecha de renovación. Implementa las siguientes funciones:
• Añadir una póliza.
• Programar la renovación de la póliza utilizando setTimeout().
• Mostrar todas las pólizas activas.  */

/* 4. Redes Sociales: Notificaciones de Amigos

Implementa un sistema de gestión de amigos en una red social. Cada amigo
debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un
setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una
notificación si un amigo se pone en línea. */

/* 5. Banco: Transferencias Programadas
Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta
debe tener un nombre del propietario, un saldo y un estado (activo o inactivo).
Implementa las siguientes funciones:
• Añadir una cuenta.
• Realizar una transferencia entre cuentas después de un retraso de 8
segundos utilizando setTimeout().
• Mostrar todas las cuentas. */

/* Ejercicio 6: Encapsulamiento en clases
Crea una clase CuentaBancaria que tenga atributos privados como saldo y un
método público para consultar el saldo y otro para depositar dinero. */

/* Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista)
Crea una función genérica que acepte una tupla con dos elementos de cualquier
tipo y retorne una nueva tupla con los elementos invertidos.
Para este ejercicio deben pensar mucho porque es para poner en juego la lógica
de programacion  */

/* Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
Crea un sistema para gestionar una nave espacial en una misión de recolección
de recursos en diferentes planetas. Define una clase NaveEspacial con atributos
como combustible y capacidadDeCarga. Implementa métodos para viajar entre
planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el
combustible. Usa tuplas para representar las coordenadas espaciales de los
planetas y una interfaz para los tipos de recursos recolectados. */

 /* Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
Crea un sistema que represente el juego Pac-Man utilizando clases. Define una
clase Personaje que sirva como clase base para PacMan y Fantasma. Implementa
métodos para moverse por el mapa y realizar acciones. Define una interfaz

EntidadMovible que contenga el método moverse. Usa herencia para que Pac-
Man y los fantasmas compartan el comportamiento de moverse y polimorfismo

para que cada personaje pueda implementar su propio comportamiento de
movimiento. */

/* Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
Crea un sistema de gestión de productos en una tienda de belleza. Define una
clase Producto con atributos como nombre, precio y categoria. Luego, crea una
clase Inventario que gestione un conjunto de productos y tenga métodos para
agregar, eliminar y buscar productos por categoría. Usa polimorfismo para
manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar,
etc. */

/* Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y
Polimorfismo
Crea un sistema de reservas para una peluquería. Define una clase Servicio con
atributos comunes como nombre, duracion, y precio. Luego, crea clases
concretas para diferentes servicios como CorteDeCabello y Manicura.
Implementa una clase Cliente y una clase Reserva que asocie clientes con
servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio
y encapsulamiento para gestionar la disponibilidad de horarios. */