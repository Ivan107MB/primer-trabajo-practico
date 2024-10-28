console.log("mensaje enviado desde la terminal: buenas!!") 
/**Objetos literales */
const empleado1={
    codigo:100,
    nombre:"Pamela",
    Apellido:"juarez",
    descripcion:["secretaria","puntual","amable"],
    edad: 30,
    domicilio:"Av roca 1234",
    metodo1 :function(){
    return console.log("Edad en el año 2025:${this.edad+1}")
    }, 
    metodo2(){
        return console.log("Utilizamos:metodo2()")

    }
}
/*console.log(empleado1)*/
console.log("Nombre:",empleado1.nombre)
console.log("Apellido:",empleado1.Apellido)
console.log("Descripcion:",empleado1.descripcion.join(""))
