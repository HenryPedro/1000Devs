const prompt = require('prompt-sync')();
console.clear()
const VOGAIS = "aeiou"
const NUMEROS = "0123456789"
const MAIUSCULO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const MINUSCULA = "abcdefghijklmnopqrstuvwxyz"
const ESPECIAL = "!@#, @#$"
let senha ;
senha = prompt("Digite uma senha:");
// Grupo 1
for ( indiceSenha = 0; indiceSenha <= senha.length; indiceSenha++ ) {

}
    const caracte = senha[indiceSenha]
    //Critério 1.1
    if(NUMEROS.includes(caracte))
    {
        console.log("Possui um número")
    }
    
    //Critério 1.2
   if(MAIUSCULO.includes(caracte))
    {
        console.log("Tem MAIUSCULA")
    }

    //critério 1.3
    if(MINUSCULA.includes(caracte))
    {
        console.log("Tem MINUSCULA")
    }

    //1.4
    