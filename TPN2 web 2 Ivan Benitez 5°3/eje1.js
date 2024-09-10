
let nombresEstudiantes = [];


for (let i = 0; i < 10; i++) {
    let nombre = prompt(`Ingresa el nombre del estudiante ${i + 1}:`);
    nombresEstudiantes.push(nombre);
}

nombresEstudiantes.sort();

console.log("Lista de nombres ordenados alfabéticamente:");
console.log(nombresEstudiantes);