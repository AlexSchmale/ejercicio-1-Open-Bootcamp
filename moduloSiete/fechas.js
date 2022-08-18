//Crea un archivo llamado fechas.js que contenga las siguientes líneas
//
//- La fecha de hoy
let fechaHoy = new Date()
console.log(fechaHoy);
//- La fecha de tu nacimiento
let nacimiento = new Date(1999,10, 29)
console.log(nacimiento);
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let hoyMasTarde = fechaHoy > nacimiento
console.log(hoyMasTarde);
//- Una variable que contenga el día de tu nacimiento
let diaNacimiento = nacimiento.getDate()
console.log(diaNacimiento);
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = nacimiento.getMonth() + 1
console.log(mesNacimiento);
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anioNacimiento = nacimiento.getFullYear()
console.log(anioNacimiento);