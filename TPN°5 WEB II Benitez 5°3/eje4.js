
var ingresosDiarios = [ ];

for (var i = 0; i < ingresosDiarios.length; i++) {
    ingresosMensuales.push(ingresosDiarios[i]);
    var ingresosDiarios=parseIntPrompt("10000, 15000, 17500, 20000, 25000")
  }

var totalIngresos = ingresosDiarios.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0);

console.log(`El total de ingresos mensuales es: $${totalIngresos.toLocaleString()}`);
console.log("El total de ingresos mensuales es"+$80500)