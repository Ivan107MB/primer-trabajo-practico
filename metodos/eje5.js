let n=10
let edades= [];
for(let i0; i<n;i++){
    edades.push(20+i);
}
console.log("Arreglo original:",edades);
if(edades.length>=5){
    edades.shift();
}else{
    console.log("El arreglo tiene menos de 5 elementos entonces no se podra eliminar los primeros 5")
}
console.log("Arreglo despues de eliminar las cinco edades:"+edades);