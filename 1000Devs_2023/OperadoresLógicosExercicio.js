const prompt = require('prompt-sync')();
/*O aluno será aprovado se a nota final do aluno (notaFinal) 
é maior ou igual a 60 e a frequência do aluno (aulasPresentes) é maior ou igual a 80% do total de aulas (totalAulas)*/

/*será aprovado caso a notaFinal é maior ou igual 60 e a frequência do aluno (AulaPresentes) é maior ou igual a 80% do total*/

let notaFinal = 88
let totalAulas = 200
let aulasPresentes = 180

let alunoAprovado


alunoAprovado = (notaFinal >= 60) && (aulasPresentes >= (totalAulas * 0.8))//monte aqui a equação 

console.log("Aluno foi aprovado? " + alunoAprovado)

/*O veículo chegará ao destino se a distância a ser percorrida (percorrerDistancia) é menor ou igual a quantidade de combustível (qtdeCombustivel)
 dividido pela média de km por litro (mediaKmLitro) */

let percorrerDistancia = 800
let mediaKmLitro = 10
let qtdeCombustivel = 80

let veiculoChegaAoDestino 

veiculoChegaAoDestino = ((percorrerDistancia) <= 80 && (qtdeCombustivel/mediaKmLitro))//monte aqui a equação

console.log("Veículo chega até o destino? " + veiculoChegaAoDestino );