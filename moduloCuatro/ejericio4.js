//1
let nombre = "Alex";
//2
let apellido = "Schmale";
//3
let estudiante = nombre.concat(" " + apellido);
console.log(estudiante);
//4
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
//5
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
//6
let estudianteCaracteres = estudiante.length;
console.log(estudianteCaracteres); 
//7
let nombreInicial = nombre.charAt(0);
console.log(nombreInicial);
//8
let apellidoInicial = apellido.charAt(0);
console.log(apellidoInicial);
//9
let eliminarEspacios = estudiante.replace(/\s+/g,"");
console.log(eliminarEspacios);
//10
let nombreSi = estudiante.includes(nombre);
console.log(nombreSi);