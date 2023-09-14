const prompt = require('prompt-sync')();

var Valor1;
var Valor2;
var conta;

Valor1 = prompt("Informe o Valor 1:");
Valor2 = prompt("Informe o Valor 2: ");

conta = Valor1 / Valor2; 

console.log(conta.toFixed(2));
console.log("A divisão de:" ,Valor1, "Por",Valor2, "é: "+ conta);
