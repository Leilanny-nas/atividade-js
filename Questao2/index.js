var celsius = prompt("Digite a sua temperatura em grau Celsius: ");
celsius = parseFloat(celsius);

var fahrenheit = (9 * (celsius/5) + 32);

document.write("Sua temperatura em Fahrenheit é = ", `${parseFloat(fahrenheit)}<br>`)
