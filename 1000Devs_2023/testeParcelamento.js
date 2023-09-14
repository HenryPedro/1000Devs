const prompt = require('prompt-sync')();
//

var nome 

nome = prompt("Digite seu nome:");
exibirMenu(nome);
resposta = parseInt(prompt("Digite a opção desejada: "))

function exibirMenu(nomeUsuario){
    console.log(nome + ": Seja Bem-Vindo");
    console.log(nome + ":     ============MENU===========");
    console.log(nome + ": 1 - Venda à vista no dinheiro ");
    console.log(nome + ": 2 - Venda à vista no cartão de crédito");
    console.log(nome + ": 3 - Venda 2x no cartão de crédito");
    console.log(nome + ": 4 - Venda 4x no cartão de crédito");
}
