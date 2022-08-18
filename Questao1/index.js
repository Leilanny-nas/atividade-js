var raio = prompt("Raio de um círculo: ");
raio = parseFloat(raio);

var comprimento = 2 * Math.PI * raio;
var area = Math.PI * raio * raio; 

document.write("O comprimento da circunferência é: = ", `${parseFloat(comprimento)}<br>`);
document.write("A área do círculo é: = ", `${parseFloat(area)}`);
