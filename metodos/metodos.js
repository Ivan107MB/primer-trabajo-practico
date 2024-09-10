var arreglo=[ ]
/*Cargamos valores decimales mediante el metodo parseFloat*/
for(let i=0; i<4; i++){
    arreglo[1]=parseFloat(prompt("Ingrese numero decimal"))
}
document.write(arreglo.join(""))
document.write(arreglo[i]+"<br>");
/*Imprimir de forma horizontal*/
for(let i=0; i<4;i++){
    arreglo[1]=parseInt(prompt("Ingrese numeros enteros:"))
}  
document.write(arreglo.join("")) 





var arreglo=("Lapiz","Marcador","Regla","Cuaderno")
document.write(arreglo.join(" ")+"<br>")
document.write("Cantidad de valores"+arreglo.length)
document.write("<br>")
    arreglo.push("Cartuchera")
    document.write("Elemento agregado:"+arreglo.join(" "))
    document.write("<br>")
    arreglo.unshift("Lapicera")
document.write("Elemento agregado:"+arreglo.join(" "))
arreglo.shift()
document.write("1ª elemento eliminado"+arreglo.join("    " ))

  

