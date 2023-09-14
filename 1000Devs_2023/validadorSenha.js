const prompt = require('prompt-sync')();
//
const VOGAIS = "aeiou"

let nome = "PEDRO HENRIQUE CORREIA DE ALMEIDA"

let qtdeVogais = 0



for (let contNome = 0; contNome < nome.length; contNome +=1) { 
     let letraNome = nome.charAt(contNome)

     qtdeVogais += identificarVogal(letraNome)
}

console.log("Quantidade de vogais " + qtdeVogais);


function identificarVogal(letraNome){
    const VOGAIS = "aeiou"
    
    for (let contVogal = 0; contVogal < VOGAIS.length; contVogal +=1){

        let letraVogal = VOGAIS.charAt(contVogal)
        if (letraNome == letraVogal) {
        
            return VOGAIS.charAt(1)
        }
    }
    return 0
} 
