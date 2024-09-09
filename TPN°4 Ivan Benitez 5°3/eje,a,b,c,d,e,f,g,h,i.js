const precios = [200, 230, 300, 345, 460, 500, 150, 400];

// Aplicar aumento del 15%
const preciosAumentados = precios.map(precio => precio * 1.15);

// Filtrar precios según diferentes criterios
const preciosIgualesA230 = preciosAumentados.filter(precio => precio === 230);
const preciosEntre300y500 = preciosAumentados.filter(precio => precio >= 300 && precio <= 500);
const preciosMayoresA400 = preciosAumentados.filter(precio => precio > 400);
const preciosMenoresA200 = preciosAumentados.filter(precio => precio < 200);
const preciosDistintosA345 = preciosAumentados.filter(precio => precio !== 345);
const preciosNoSon460 = preciosAumentados.filter(precio => precio !== 460);
const preciosMayoresA500OMenoresA200 = preciosAumentados.filter(precio => precio > 500 || precio < 200);
const preciosIgualesA345 = preciosAumentados.filter(precio => precio === 345);

// Mostrar resultados  
console.log('Precios aumentados:', preciosAumentados);
console.log('Precios iguales a 230:', preciosIgualesA230);
console.log('Precios entre 300 y 500:', preciosEntre300y500);
console.log('Precios mayores a 400:', preciosMayoresA400);
console.log('Precios menores a 200:', preciosMenoresA200);
console.log('Precios distintos a 345:', preciosDistintosA345);
console.log('Precios que no son 460:', preciosNoSon460);
console.log('Precios mayores a 500 o menores a 200:', preciosMayoresA500OMenoresA200);
console.log('Precios iguales a 345:', preciosIgualesA345);  