/*cargamos un arreglo mediante el prompt cuando trabajamos con texto y con prompt+parseInt cuando cargamos
numeros decimales trabajamos con el prompt + parseInt*/
var arregloVacio=[]
var n=5
for(let i=0;i<n;i++){
    arregloVacio[1]=parseFloat(prompt("ingrese el sueldo"))
    arregloVacio[1]=parseInt(prompt("Ingrese una cantidad de alumnos"))
    arregloVacio[1]=prompt("ingrese nombre")
    arregloVacio[1]=Math.floor(Math.random()*10)
}    
document.write(arregloVacio.join(""))
var arregloAlumnos=["Ana","Laura","Santiago","Luis"]
document.write(arregloAlumnos.join(""))
/*Metodos para agregar elementos:
Unshift: Agregamos elementos el principio 
push: Agregamos elementos al final */
arregloAlumnos.unshift("Franco")
document.write(arregloAlumnos.join(""))
arregloAlumnos.push("Lucas")
document.write(arregloAlumnos.join("")) 