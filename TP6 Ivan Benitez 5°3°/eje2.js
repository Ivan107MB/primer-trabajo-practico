
function imprimirTablaMultiplicar(numero) {
    console.log(`\n# Tabla del N°: ${numero}\n`);
    
    var numeros = [1,2,3,4,5,6,7,8,9,10]
    
    
    numeros.forEach(num => {
        console.log(`${numero} x ${num} = ${numero * num}`);
    });
}                     

var numeroIngresado = 7;
imprimirTablaMultiplicar(numeroIngresado);