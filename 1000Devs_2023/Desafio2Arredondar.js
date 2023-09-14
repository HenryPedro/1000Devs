const prompt = require('prompt-sync')();
main()

function main() {
    let salarioMinimo
    let salarioFuncionario
    
    salarioMinimo = obterValorFracionario("Digite qual é o salário mínimo: ")
    salarioFuncionario = obterValorFracionario("Digite o salário do funcionário: ")
    
    qntdSalarios = arredondar2Casas(salarioFuncionario, salarioMinimo, 2);

    function arredondar2Casas(salarioMinimo,salarioFuncionario){
      let calculo
      calculo = salarioMinimo/salarioFuncionario.toFixed(2);
      return calculo
    }

    console.log("O funcionário recebe: "+ (salarioFuncionario/salarioMinimo).toFixed(2) + " salários mínimos" ) // desafio 1
    
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}

