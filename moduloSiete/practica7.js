// Sets o conjuntos
let arreglo = [1,2,3, 43, 32]
let miSet = new Set(arreglo)

// add()
miSet.add(24); // En este caso se agrega el numero 24 al final del set
miSet.add(1);// No se agrega ningun valor ya que no puede haber numeros o elementos repetidos
console.log(miSet);
// delete()
miSet.delete(3)
console.log(miSet);

// forEach()
miSet.forEach(valor => console.log(valor))

// Para pasar de un Set a un Array
let setAArray = [...miSet]
console.log(setAArray);

// Creación de objetos
const obj = {
    id:4,
    nombre : "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    peliculaFavorita: ["La isla siniestra", "Transformers"],
    '4 juegos': [ 1, 2, 3, 4]
}
// Para copiar un objeto:
const obj2 = {...obj}
console.log(obj2);

// como ordenar listas de objetos en función de una propiedad
const listaPeliculas = [
    { titulo: "Lo que el viento se llevo", anio: 1939},
    { titulo: "Titanic", anio: 1997},
    { titulo: "Moana", anio: 2016},
    { titulo: "El efecto mariposa", anio: 2004},
    { titulo: "TED", anio: 2012}
];
// Para ordenarlo utilizo el metodo sort(), tengo que tener en cuenta que muta el arreglo original
const ordernarArreglo = listaPeliculas.sort((a, b) => a.anio - b.anio)
console.log(listaPeliculas);

// Fechas

const fecha = new Date()
console.log(fecha);

// Los meses inicializan en 0
const fecha2 = new Date(1987, 10, 6)
console.log(fecha);

const fecha3 = new Date("October 13, 1979")
console.log(fecha3);

console.log(fecha > fecha3);

// Para comparar si dos fechas son iguales lo tengo que hacer en milisegundos
// console.log(fecha2.getTime() === fecha3.getTime()) // me lo esta pasando a milisegundos

// Cómo obtener el dia, mes y el año de una fecha

//Para obtener el dia .getDate()
fecha2.getDate()
//Para obtener el mes .getMonth
fecha2.getMonth() // acordarse de sumarle uno
//Para obtener el año
fecha2.getFullYear()

// Para mostrar una fecha en un string
fecha2.toLocaleDateString() // le puedo pasar por parametro el formato