
let numeros = [];

for (let i = 0; i < 15; i++) {
    let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    numeros.push(numero);
}
numeros.sort((a, b) => a - b);

console.log("Lista de números ordenados de menor a mayor:");
console.log(numeros);