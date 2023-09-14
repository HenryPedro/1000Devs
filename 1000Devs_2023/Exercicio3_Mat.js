const prompt = require('prompt-sync')();

var nota1, nota2, nota3
var resultado

nota1 = prompt("Digite a nota: 1");
nota2 = prompt("Digite a nota: 2");
nota3 = prompt("Digite a nota: 3");

resultado = (Number(nota1) * 1) + (Number(nota2) * 2) + (Number(nota3) * 3) / 6 
console.log("Média ponderada:" + resultado); ///soma