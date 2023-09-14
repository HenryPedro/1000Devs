/*
Elaborar um programa que leia o valor de um jantar. 
Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.*/

const prompt = require('prompt-sync')();

//Valor do jantar R$80.00
//Taxa do Garçom R$: 8.00
//Total a Pagar R$: 88.00

let ValorJantar = Number(prompt("Valor do jantar R$: "));
let TaxaGarcom = ValorJantar * 0.10;
let TotalPagar = ValorJantar + TaxaGarcom;
//note que no comando acima não escrevemos jantar * 10%
//isso acontece porque a linguagem de programação não foi criado para entender que 10% é 10 dividido por 100
//desta forma, o programador já coloca o resultado que equivale a 10% ou seja, 0.1 ou 0.10

console.log("Taxa do garçom é: " ,TaxaGarcom, "e o valor total a ser pago é: R$" , TotalPagar ,);