const prompt = require('prompt-sync')();
//

main()

function main() {
    let nota1
    let nota2
    let nota3
    let resultado


    nota1 = obterValorFracionario("Digite o valor da nota1: ")
    nota2 = obterValorFracionario("Digite o valor da nota2: ")
    nota3 = obterValorFracionario("Digite o valor da nota3: ")
    
    resultado =  calcularMediaPonderada(nota1,nota2,nota3)  //ajustes aqui
    console.log("A media ponderada das notas 1,2 e 3 são:" +nota1 +nota2 +nota3 + " o total é: " + resultado.toFixed(2)) //ajustes aqui
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}

function calcularMediaPonderada(nota1, nota2, nota3) {  //ajuste aqui a assinatura da função
    let peso1 = 1
    let peso2 = 2
    let peso3 = 3
    let somaPesos = (peso1 + peso2 + peso3)
    
    return ( ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / somaPesos) 

}