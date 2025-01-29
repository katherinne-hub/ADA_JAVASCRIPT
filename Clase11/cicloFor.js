const prompt = require('prompt-sync')();

/*let texto = prompt("Ingrese el texto que quieras que el lorito repita: ")
//condicion: i < 5 (el ciclo continua mientra i sea menor que 5
//incremento: i ++ (suma 1 al contador en cada iteracion )
for ( let i = 0; i < 5; i++) {
    console.log(`Repeticion ${i + 1} : ${texto}`);
}*/
/*Crear un array de objetos llamado libros que contenga al menos 10libros. 
Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).

 ej=1.a     */
const libros = [
    {
    id:"1" ,
    titulo:"Noticia de un Secuestro",
    autor: "Gabriel Garcia Marquez",
    anio: "1996",
    genero:"No-Ficcion",
    disponible:true,},
    /*describir: function() {
        return `El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${this.anio} es de genero ${this.genero} esta ${this.disponible}`;
    }
}*/
{
id:"2",
titulo:"Marque la diferencia y triunfe",
autor: "Jim Champy",
anio: "2009",
genero:"Crecimiento Personal",
disponible: false,},
/*describir: function () {
    return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${1996} es de genero ${this.genero} es ${this.disponible}`;

} 
},
*/{
    id:"3",
    titulo:"Diccionario Amoroso del Sicuanalicis",
    autor: "Elisabet ",
    anio: "2017",
    genero:"Psicologia",
    disponible: true,},
    /*describir: function () {
        return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${1996} es de genero ${this.genero} es ${this.disponible}`;
}
},
*/{
    id:"4",
    titulo:"La casa de los espiritus",
    autor: "Isabela Allende",
    anio: "1982",
    genero:"Novela",
    disponible: true,},
    /*describir: function () {
        return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${1996} es de genero ${this.genero} es ${this.disponible}`;    
}
},*/
{   id:"5",
    titulo:"La 48 Leyes Del Poder",
    autor: " Robert Greene",
    anio: " 1998 ",
    genero:" Auto Ayuda ",
    disponible: false,},
    /*describir: function () {
        return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${1996} es de genero ${this.genero} es ${this.disponible}`;    
}
},
*/{ id : "6",
    titulo: "El Sutil Arte de que (casi todo) te importe una Mierda",
    autor :"Mark Manson",
    anio  :"2016",
    genero :"Autoayuda",
    disponible : true,},
    /*describir : function(){
         return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${this.anio} es de genero ${this.genero} es ${this.disponible}`;
    }
},
*/
{
    id : "7",
    titulo: "Hamlet Macbeth",
    autor :"Wiliiam Shakepeare",
    anio  :"1980",
    genero :"Dramático",
    disponible : false,},/*
    describir : function(){
         return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${this.anio} es de genero ${this.genero} es ${this.disponible}`;
    }
},
*/{
    id : "8",
    titulo: "El Nombre De La Rosa",
    autor :" Umberto Eco",
    anio  :"1980",
    genero :"Novela",
    disponible : false,},/*
    describir : function(){
         return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${this.anio} es de genero ${this.genero} es ${this.disponible}`;

}
},
 */{
    id : "9",
    titulo: "Memoria de Adriano",
    autor :"Marguerite Yourcenar",
    anio  :"1951",
    genero :"Novela",
    disponible : false,},/*
    describir: function(){
         return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${this.anio} es de genero ${this.genero} es ${this.disponible}`;
    }   
},
*/{ 
    id : "10",
    titulo: "Los Iluminados",
    autor :"Marcos Aguinis",
    anio  :"2000",
    genero :"Ficción",
    disponible : true,},/*
    describir : function(){
         return`El libro ${this.id} con titulo ${this.titulo} por ${this.autor} del anio ${this.anio} es de genero ${this.genero} es ${this.disponible}`;
        }
    },*/
];
console.log(libros[0]);
console.log(libros[1]);
console.log(libros[2]);
console.log(libros[3]);
console.log(libros[4]);
console.log(libros[5]);
console.log(libros[6]);
console.log(libros[7]);
console.log(libros[8]);
console.log(libros[9]);
/*ej:1-b) Crear un array de 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros).  */ 
let usuarios = [
    {
        id:1,
        nombre:"",
        email:"juan.perez@example.com",
        librosPrestados:["1","3"],
        describir : function () {
            return`Usuario: ${this.id} - Nombre: ${this.nombre} - Email: ${this.email} - Libros prestados: ${this.librosPrestados}`}    
    }
    ,
    {
        id:2,
        nombre:"",
        email:"ana.garcia@example.com",
        librosPrestados:["2"],
        describir : function () {
            return`Usuario: ${this.id} - Nombre: ${this.nombre} - Email: ${this.email} - Libros prestados: ${this.librosPrestados}`}    
    
    },
   {
    id:3,
    nombre:"",
    email:"",
    librosPrestados:["1","2","3"],
    describir : function () {
        return`Usuario: ${this.id} - Nombre: ${this.nombre} - Email: ${this.email} - Libros prestados: ${this.librosPrestados}`}    

   },
   {
    id:4,
    nombre:"Fabiana Herrera",
    email:"",
    librosPrestados:["4","5"],
    describir : function () {
        return`Usuario: ${this.id} - Nombre: ${this.nombre} - Email: ${this.email} - Libros prestados: ${this.librosPrestados}`}    
    
   },
   {
    id:5,
    nombre:"Susana Gimenes",
    email:"",
    librosPrestados:["1"],
    describir : function () {
        return`Usuario: ${this.id} - Nombre: ${this.nombre} - Email: ${this.email} - Libros prestados: ${this.librosPrestados}`}    
    
   }
   

];
 console.log(usuarios[0].describir());
 console.log(usuarios[1].describir());
 console.log(usuarios[2].describir());
 console.log(usuarios[3].describir());
 console.log(usuarios[4].describir());


/*PUNTO2:A. Funciones de Gestión de Libros
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.*/

/*""ATENCION"¡¡¡¡SEPARAR ESTA FUNCION DE BLOQUE USUARIO!*/
/*BORRADA----- let misLibros =["Libro11"]-----*/
function agregarLibro(){
    const nuevoLibro = {
        id: 11,
        titulo: "El Señor de los Anillos",
        autor:"J.R.R. Tolkien",
        anio: 1954,
        genero:"fantasia"
    };
    libros.push(nuevoLibro);
console.log(`Agregando nuevo Libro ID: ${nuevoLibro.id} `);
}

agregarLibro();
console.log(libros);

/*EJ:2-b) Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.*/
 
// ¡¡¡¡¡EXPLICAR!!!!!!
function buscarLibro(criteroValor) {       
    return libros.filter(function(libro) {  
        return libro.genero === criteroValor; //Cambiamos libro.titulo si queremos buscar por el titulo
    });
}

const encontrarLibro = buscarLibro("Novela"); //Buscar por el titulo o escribimos el titulo
console.log(encontrarLibro);

/*EJ:2-c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
por título o año utilizando el algoritmo de ordenamiento burbuja
(bubble sort) y luego muestre los libros ordenados en la consola.*/

function ordenarLibros(anio){
    const n = anio.lenght; 
    if (anio !== "titulo" && anio !== "anio") {
        return;   //
    }
    for (let i = 0 ;i < 1 ; i++) {
        for(j = 0; j < i ; j ++) {
            if (libros[j].anio > libros[j + 1].anio) {
                [libros[j],libros[j + 1]] = [libros[j + 1],libros[j]];
            }
        }
    }
    console.log(`Ordenar libros por ${anio}:`, libros);
    return libros
    }
    ordenarLibros("titulo");

    ordenarLibros("anio");
    //console.log(`Ordenar libros por ${anio}:`, libros);
    
/*EJ:2-d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro.*/