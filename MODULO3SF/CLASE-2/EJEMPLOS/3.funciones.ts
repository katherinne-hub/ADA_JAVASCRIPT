// 1.FUNCION BASICA:
function sumar(a: number, b: number): number {
    return a + b;
}
let resultadoSuma = sumar(300 , 450);
console.log("Resultado de la suma:", resultadoSuma);
console.log("-------------");

// 2.FUNCION QUE NO RETORNA NADA (VOID):
function mostrarMensaje(mensaje: string):void {
    console.log("Mensaje:", mensaje);
    console.log("-------------");
}
mostrarMensaje("Hola, este es un mensaje de prueba.");

// 3.FUNCION CON PARAMETROS OPCIONALES:
function saludar(nombre: string, saludar?: string): string {
    if(saludar) {
        return saludar + ", " + nombre + "!";
    } else {
        return "Hola," + nombre + "!";
    }
}
console.log(saludar("Fabrizio", "Buenos dias"));
console.log(saludar("Fabrizio"));
console.log("-------------");

// EJ: PARECIDO
function saludar2(nombre: string, saludo: string = "Hola"): string {
    return saludo + "," + nombre + "!"; 
}
console.log(saludar2("Fabrizio"));
console.log(saludar2("Fabrizio", "Buenas tardes"));

//