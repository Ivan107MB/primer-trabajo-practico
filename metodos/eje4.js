let estaturas=(1.70,1.65,1.80, 1.75, 1.60, 1.85, 1.90, 1.55, 1.68, 1.72);
let nuevaestatura= 1.78;
estaturas.push(nuevaestatura);
console.log("arreglo de estaturas:",estaturas); 
for(let i=0;i<3;i++){
    estaturas.pop();
}
console.log(estaturas)