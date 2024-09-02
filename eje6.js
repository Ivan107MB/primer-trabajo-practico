var frutasCitricas=[];
var frutasConPepitas=[];

function clasificarFruta(){
    for(let i=0;i<5;i++){
        let nombreFruta=prompt("Ingrese el nombre de la fruta:");
       let tipoFruta=prompt("¿Es citrica o con pepitas?(citrico/pepita")

       if(tipoFruta==="citrico"){
        frutasCitricas.push(nombreFruta);
      }else if(tipoFruta==="pepita"){
        frutasConPepitas.unshift(nombreFruta);
      }else{
        alert("Tipo de fruta no valido. Intentade nuevo.");
      }

    }
}
function mostrarFrutasClasificadas(){
    console.log("Frutas Citricas:"+frutasCitricas);
    console.log("Frutas con Pepitas:"+frutasConPepitas);
    
}
clasificarFruta();
mostrarFrutasClasificadas();