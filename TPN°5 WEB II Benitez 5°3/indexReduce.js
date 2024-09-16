var arreglo=[1.2,3,4,10,12]
var suma=0
for(let i=0; i<arreglo.lemgth;i++){
    suma=suma+arreglo[1]
}
console.log(suma)
document.write(suma)

/*Metodo reduce*/
var arreglo=[1,2,3,4,10,12]
document.write("Arreglo original:$(arreglo)<br>")
console.log("Arreglo original:$(arreglo)")
/*Creamos una variable para el metodo reduce*/
var sumaTotal=arreglo.reduce((acumulador,num)=>acumulador+num,0)
console.log("la suma total es:$(sumaTotal)")
document.write("La suma total es:$(sumaTotal)")

var conDecimales=7.57
Math.trunc(conDecimales)
(conDecimales).toFixed(0)
(conDecimales).toFixed(1)
(conDecimales).toFixed(2)

/*Estructtura repetitiva while*/
var cont=0
var cont=5
while(cont<cant){
    /**instrucciones */
    cont++
}
/**estructura repetitiva do-while */
var cont=0
var n=5
do{
    /**Instrucciones **/
    cont++
}while(cont<n)
    /*estructura repetitiva Do-whilke y valor ingresado por teclado*/
    do{
        var teclado=prompt("valor ingresado")

    }while(teclado !=="terminar")

        var arreglo=[]
        var cont=0
        var cant=5
        while(cont<cant){
            arreglo[1]=parseFloat(prompt("Ingrese valor del arreglo:"))
            cont ++
        }
       document.write(arreglojoin("-"))
