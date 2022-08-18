var fahrenheit = prompt("Digite a sua temperatura em grau fahrenheit: ");
fahrenheit = parseFloat(fahrenheit);

var celsius = 5 * (fahrenheit - 32/ 9);

document.write("Sua temperatura em Celsius é = ", `${parseFloat(celsius)}<br>`)
