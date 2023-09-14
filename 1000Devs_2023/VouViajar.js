const prompt = require('prompt-sync')();
//

let idade = 18

nome = prompt("Digite seu nome Completo ")
idade = prompt("Digite sua idade ")

if(idade >= 18 ){
    console.log("Ótimas noticias, o seu intercambio musical está a um passo de acontecer! Não esqueça que o requisito para o intercambio escolar é ser aluno da: SchoolOfRock,  e ser estudante das aulas de guitarra. O destino Final de seu intercambio, será o Canadá.");
    
} else {
    console.log("Infelizmente essas vagas são destinadas para musicos  maiores de 18 anos. Mas não desanime, temos vagas para menos de idades, confira abaixo. E fique de olho que o próximo intercambio será para Nova Iorque ");
}



/*main() 
 function main(){
    let tenhoDinheiro = true
    let estaChovendo = false 
    let passagemDeOnibus = false 
    let passagemDeAviao = true 
    let ireiViajar 

    ireiViajar = (tenhoDinheiro == true && estaChovendo == false && (passagemDeAviao == true) || passagemDeOnibus == true)
    console.log("Vou Viajar?: " + ireiViajar);
 }*/
 