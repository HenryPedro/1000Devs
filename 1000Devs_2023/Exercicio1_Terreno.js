//declaração das variaveis
const prompt = require('prompt-sync')();
var metragemFrente;
var metragemLateral;
var ValorMetroQuadrado;
var valor;
var valorFinalTerreno;

//obtenção de dados digitados pelo usuário e armazenado nas variaveis
metragemFrente = prompt("Informe a metragem da frente");
metragemLateral = prompt("Informe a metragem da lateral");
ValorMetroQuadrado = prompt("Informe o valor do metro quadrado");

//calculo da area do terreno
area = metragemFrente * metragemLateral;
valorFinalTerreno = area * ValorMetroQuadrado;

//exibição dos dados na tela do usuario
console.log("Area total do terreno de " ,metragemFrente, " mts de frente e " ,metragemLateral, " mts lateral é " ,area, " mts de area.");
console.log("O valor desse terreno é:R$" ,valorFinalTerreno);