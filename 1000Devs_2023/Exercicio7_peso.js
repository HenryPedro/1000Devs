const prompt = require('prompt-sync')();

var peso

peso = Number(prompt("Digite seu peso:"));

//console.log(" Caso a pessoa engorde 15% ficara com: " + (peso * 1.15) , "KG")
//console.log(" Caso a pessoa engorde 20% ficara com: " + (peso * 1.20), "KG")

aumentarXPorCento(peso,1.15);
aumentarXPorCento(peso,1.20);
aumentarXPorCento(peso,1.30);
aumentarXPorCento(peso,1.50);
aumentarXPorCento(peso,1.10);
aumentarXPorCento(peso,1.25);

function aumentarXPorCento(p, perCent){
    console.log(" Caso a pessoa engorde" ,((perCent - 1).toFixed(0)), "% ficara com : " , (p * perCent), "KG");

}