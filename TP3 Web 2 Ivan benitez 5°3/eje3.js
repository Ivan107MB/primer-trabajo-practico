let numerosAleatorios = Array.from({ length: 10 }, () => Math.random());


let cubos = numerosAleatorios.map(numero => Math.pow(numero, 3));

console.log(cubos);