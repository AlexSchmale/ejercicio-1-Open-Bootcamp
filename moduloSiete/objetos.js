//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let datosPersonales = {
    nombre: 'Alex',
    apellido: 'Schmale',
    edad: 22,
    altura: 1.85,
    eresDesarrollador: false
}
let mejoresAmigos = [
    {
        nombre: 'Milena',
        apellido: 'Ricci',
        edad: 21,
        altura: 1.71,
        eresDesarrollador: false
    },
    {
        nombre: 'Nicolás',
        apellido: 'Bustamante',
        edad: 23,
        altura: 1.76,
        eresDesarrollador: false
    }
]
//- Una variable que obtenga tu edad a partir del objeto anterior
let edad = datosPersonales.edad
console.log(edad);
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [datosPersonales, ...mejoresAmigos]
console.log(lista);
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = lista.sort((a, b) => a.edad - b.edad)
console.log(listaOrdenada);