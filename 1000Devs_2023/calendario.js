const prompt = require("prompt-sync")()

let mesInicial 
let mesFinal

console.clear()

mesInicial = Number(prompt("Digite o mes inicial: "))
mesFinal = Number(prompt("Digite o mes final: "))

let totalDias = 0 

if (mesInicial <= mesFinal) {
    for (let mes = mesInicial; mes <= mesFinal; mes++ ) {
        totalDias += calcularTotalDias(mes)
        console.log(totalDias)
    }
} else  {
    console.log('Mês inicial "' + mesInicial + '" não pode ser maior que o mês final "' + mesFinal + '"')
}


console.log("Total de dias: " + totalDias )

function mesPar(mes) {
    return (mes % 2 == 0)
}

function primeiroSemestre(mes) {
    return (mes >= 1 && mes <= 6)
}

function segundoSemestre(mes) {
    return (mes >= 7 && mes <= 12)
}

function ehFevereiro(mes) {
    return (mes == 2)
}

function ehJulho(mes) {
    return (mes == 7)
}

function calcularTotalDias(mes){
    let totalDias = 0

    if (ehFevereiro(mes)) { 
        totalDias += 28
    } else if (ehJulho(mes)){
        totalDias += 31
    } else if (primeiroSemestre(mes) && mesPar(mes)) { 
        totalDias += 30
    } else if (primeiroSemestre(mes) && !mesPar(mes)) {
        totalDias += 31
    } else if (segundoSemestre(mes) && mesPar(mes)) { 
        totalDias += 31
    } else if (segundoSemestre(mes) && !mesPar(mes)){
        totalDias += 30
    } 

    return totalDias

}