//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompras = ["Agua", "carne", "ensalada", "arroz", "fideos"]
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol")
//console.log(listaCompras);
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop()
//console.log(listaCompras);
//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = [
    {
        titulo: "La Isla Siniestra",
        director: "Martin Scorsese",
        fecha: 2010
    },
    {
        titulo: "Everest",
        director: "Baltasar Kormákur",
        fecha: 2015
    },
    {
        titulo: "Toy Story",
        director: "John Lasseter",
        fecha: 1995
    }
]

let listaDirectores = ["Martin Scorsese", "Baltasar Kormákur", "John Lasseter"]
let listaTitulos = ["La Isla Siniestra","Everest", "Toy Story"]
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosterioresA2010 = peliculas.filter(objeto=> objeto.fecha > 2010)
//console.log(peliculasPosterioresA2010);
//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(valor => valor.director)
//console.log(directores);
//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(valor => valor.titulo)
//console.log(titulos);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const unificacionDeListas = listaDirectores.concat(listaTitulos)
//console.log(unificacionDeListas);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const unificacionDeListas2 = listaDirectores.concat(...listaTitulos)
console.log(unificacionDeListas2);