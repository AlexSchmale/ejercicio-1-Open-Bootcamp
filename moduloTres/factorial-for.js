// Calculo el factorial de 10 con un bucle for


let factorialDiez = () =>{
    let acumulador = 1
    for (let i = 1; i < 11; i++) {
        acumulador = i * acumulador
    }
    return acumulador
} 
console.log(factorialDiez()); 