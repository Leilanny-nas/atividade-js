var dinheiro = parseFloat(prompt("Informe quanto de dinheiro você tem "));

var combustivel = parseFloat(dinheiro / 5);
var kilometros = parseFloat(combustivel*20);

document.write(`Com ${dinheiro} reais, você compra ${combustivel} litros de combustível e você consegue andar ${kilometros} km`)