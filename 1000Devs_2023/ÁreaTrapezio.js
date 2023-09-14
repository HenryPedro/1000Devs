const prompt = require('prompt-sync')();
//
main()

function main() {
    let baseMaior;
    let baseMenor;
    let altura;
    let area;
    let lateral;
    let base;
    let raio;
    
    //Cálculo da Área do Trapézio
    console.log("== Cálculo da Área do Trapézio ==");
    
    baseMaior = getFloatNumber("Digite o valor da base maior: ");
    baseMenor = getFloatNumber("Digite o valor da base menor: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    //////////uso de funcao que nao retorna valor
    calcularAreaTrapezio(baseMaior, baseMenor, altura); 
    
    //Cálculo da Área do Quadrado
    console.log("== Cálculo da Área do Quadrado ==");
    
    lateral = getFloatNumber("Digite o valor de um dos lados: ")
    
    /////////uso de funcao que retorna valor
    console.log("Área do Quadrado: " + calcularAreaQuadrado(lateral));
  
    //Cálculo da Área do Retângulo
    console.log("== Cálculo da Área do Retângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    console.log("Área do Retângulo: " + (base * altura).toFixed(2));
    
    //Cálculo da Área do Círculo
    console.log("== Cálculo da Área do Círculo ==");
    raio = getFloatNumber("Digite o valor do raio: ");
    
    console.log("Área do Círculo: " + (3.14 * raio * raio).toFixed(2));
    
    //Cálculo da Área do Triângulo
    console.log("== Cálculo da Área do Triângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    base = getFloatNumber("Digite o valor da altura: ");
    
    console.log("Área do Triângulo: " + (base * altura).toFixed(2));
}

function getFloatNumber(message) {
    return Number(prompt(message));
}

function calcularAreaQuadrado(lateral){
    let area = (lateral * lateral);
    return area.toFixed(2);
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura){
    let area = ((baseMaior + baseMenor) * altura) / 2

    console.log("Área do Trapézio: " + area.toFixed(2));
}
