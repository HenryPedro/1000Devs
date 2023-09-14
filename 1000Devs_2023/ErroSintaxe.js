const prompt = require('prompt-sync')();

// lê os números

var num1 = Number(prompt("Número 1: "));
var num2 = Number(prompt("Número 2: "));

// calcula a soma

var soma = (num1 + num2);

// exibe o resultado

console.log("Soma é: " + soma);