let alumnos = ["Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel", "Elena", "Raúl"];
let curso = "Curso de Programación";

let alumnosActualizados = alumnos.map(alumno => curso + " - " + alumno);


console.log(alumnosActualizados);