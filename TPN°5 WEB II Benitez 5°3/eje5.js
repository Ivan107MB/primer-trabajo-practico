
var Cantidad = 6

var litrosDiarios = [1200, 2500, 1500, 2544, 2846, 3521]; 
for (var i = 0; i < litrosDiarios.length; i++) 
  litrosCombustible.push(cantidad[i]);

var totalLitros = litrosDiarios.reduce((acumulador, litros) => acumulador + litros, 0);

console.log(`El total de combustible ingresado durante la semana es: ${totalLitros} Lts`);

