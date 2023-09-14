const prompt = require('prompt-sync')();
//Proposta de Exercício:
//Entenda o funcionamento do código abaixo com relação ao uso das funções.
//Tente criar uma função chamada exibirAreaTotal e exibirValorTerreno. 
//A funcao exibirAreaTotal deve conter o comando com a identificação (comentário) desafio 1 e a 
//função exibirValorTerreno deve conter o comando desafio 2 
//

main()

function main() {
    let metragemFrente, metragemLateral, areaTerreno
    let valorMetroQuadrado
    let valorTotalTerreno
    let exibirAreaTotal // desafio 1
    let exibirValorTerreno //desafio 2

    metragemFrente = obterValorFracionario("Digite a metragem da Frente: ")
    metragemLateral = obterValorFracionario("Digite a metragem da lateral: ")
    valorMetroQuadrado = obterValorFracionario("Digite o valor do metro quadrado R$: ")
    
    areaTerreno = calcularAreaTerreno(metragemFrente, metragemLateral) 
    valorTotalTerreno = calcularValorTotal(areaTerreno, valorMetroQuadrado)
    
    console.log("A área do terreno com frente: " ,metragemFrente, "mts e Lateral" ,metragemLateral, "mts é" ,areaTerreno,)    //desafio 1
    console.log("O valor total do terreno será R$:" ,(valorTotalTerreno).toFixed(2));  //desafio 2     valor de k com duas casas decimais    
}

function calcularValorTotal(area,valor){
    return area * valor
}

function calcularAreaTerreno(frente,lateral) {
    return frente * lateral
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}
