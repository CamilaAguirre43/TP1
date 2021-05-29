const sumar = require('./calculadora/sumar');
const restar = require('./calculadora/restar');    
const dividir = require('./calculadora/dividir');
const multiplicar = require('./calculadora/multiplicar');

const process = require('process')

let cuenta = process.argv[2]
let numer1 = Number(process.argv[3]) 
let numer2 = Number(process.argv[4])

if(cuenta === "sumar"){
    console.log(sumar(numer1,numer2))
}
else if(cuenta === "restar"){
    console.log(restar(numer1,numer2))
}else if(cuenta === "multiplicar"){
    console.log(multiplicar(numer1,numer2))
}
else if(cuenta === "dividir"){
    console.log(dividir(numer1,numer2))
} else {
    console.log("Que queres hacer?")
}



