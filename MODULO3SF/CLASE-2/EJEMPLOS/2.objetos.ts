// DEFINOCION DE UN OBJETO EN TYPESCRIPT BASICO
let auto = {
    marca: "Toyota",
    modelo: "Corola",
    anio: 2023
}
// MOSTRAMOS LAS PROPIEDADES DEL OBJETO
console.log("Marca del auto:", auto.marca, "Modelo:", auto.modelo, "Año:", auto.anio);
console.log("-------------");

// DEFINICION DE OBJETOS CON DE CLARACION EXPLICITA DEL TIPO
let libro: {titulo: string, autor: string, anio: number} = {
    titulo: "100 anios de soledad",
    autor: "Gabriel Garcia Marquez",
    anio: 1967
}
// MOSTRAMOS LAS PROPIEDADES DEL OBJETO
console.log("Titulo del libro:", libro.titulo,"Autor:", libro.autor, "Ano:", libro.anio);
console.log("-------------");

// 3. OBJETO CON PROPIEDADES OPCIONALES
let estudiante: {nombre: string, edad?: number} = {
    nombre: "Katherinne"

}
// MOSTRAMOS LAS PROPIEDADES DEL OBJETO
console.log("Nombre del estudiante:", estudiante.nombre, "Edad", estudiante.edad??"No proporcionada");
console.log("-------------");

// 4. OBJETO CON METODOS
/*EJ: let perro: {nombre: string, ladrar: () => void} = {
    nombre: "Firulais",
    ladrar: function() {
        console.log(this.nombre + " dice: Guau Guau!");
    }
}  */
let perro ={
    nombre: "Firulais",
    raza: "Ladrador",
    ladrar: function() {
        return this.raza +" "+ this.nombre + " dice: Guau Guau!";
    }
}
console.log(perro.ladrar());
console.log("-------------");
