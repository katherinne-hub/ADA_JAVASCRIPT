/*Actividad 5: Usar aserciones dobles
Crea una variable de tipo any y haz una conversión con aserciones dobles para
convertirla en un number. Muestra el resultado.
*/
 let dato: any = "100";
  let numero: number = (dato as unknown) as number;
  console.log("El number es:", numero);
  console.log("Tipo: ", typeof numero);
/* ---- Ejercicio 6:
Filtrar elementos de un arreglo genérico usando For...Of y
Aserciones
Crea una función genérica llamada filtrarElementos que reciba un arreglo de
valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of,
filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de
tipo para acceder a las propiedades específicas de string.
*/

function filtrarElementos<T>(arr: T[]): string[] {
    const resultado: string[] = [];
    for (const iten of arr) {
        if (typeof iten === "string") {
            // Aserción de tipo para acceder a propiedades de string
            const strIten = iten as string;
            resultado.push(strIten); 
            
        }
    }
    return resultado;
}
const mezcla: (number | string | boolean)[] = [42, "Hola", true, "TypeScript", 3.14, false, "Aserciones"]; 
const cadenasFiltradas: string[] = filtrarElementos(mezcla);
console.log("Cadenas filtradas:", cadenasFiltradas);
console.log("/n------------/n");

