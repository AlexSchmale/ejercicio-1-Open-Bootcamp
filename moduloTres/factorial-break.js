let i = 1
let max = 11
let acumulador = 1
while(i > 0){
    if (i<11) {
        acumulador *= i
        i++
        console.log(acumulador);
    }
    if (i == 11){
        break
    }
}