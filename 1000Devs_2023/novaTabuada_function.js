const prompt = require('prompt-sync')();

// o codigo inicia abaixo:

let numero;

numero = Number(prompt("Coloque o número que deseja calcular"));

console.log("tabuada do + e do - para o número: " +numero+ " é: ");
calcularSomaSubtracao(numero,0);
calcularSomaSubtracao(numero,1);
calcularSomaSubtracao(numero,2);
calcularSomaSubtracao(numero,3);
calcularSomaSubtracao(numero,4);
calcularSomaSubtracao(numero,5);
calcularSomaSubtracao(numero,6);
calcularSomaSubtracao(numero,7);
calcularSomaSubtracao(numero,8);
calcularSomaSubtracao(numero,9);

console.log("tabuada da * e da / para o número: " +numero+ " é: ");
calcularDivisaoMultiplicacao(numero,0);
calcularDivisaoMultiplicacao(numero,1);
calcularDivisaoMultiplicacao(numero,2);
calcularDivisaoMultiplicacao(numero,3);
calcularDivisaoMultiplicacao(numero,4);
calcularDivisaoMultiplicacao(numero,5);
calcularDivisaoMultiplicacao(numero,6);
calcularDivisaoMultiplicacao(numero,7);
calcularDivisaoMultiplicacao(numero,8);
calcularDivisaoMultiplicacao(numero,9);

function calcularSomaSubtracao(num, param){
  console.log(num + " + "+ param +" =  " + (num + param) + "            " + num + " - ",param," = ", Math.abs(numero - param)   )   
}

function calcularDivisaoMultiplicacao(num,param) {
   console.log(num + " * ",param," =  " + (num * param) + "            " + num + " / ",param," = ", (num / param).toFixed(2))
}
