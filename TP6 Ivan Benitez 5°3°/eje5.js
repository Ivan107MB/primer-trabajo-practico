/*forEach*/
//Propósito: Ejecutar una función sobre cada elemento de un array. Se utiliza principalmente para efectos secundarios, como actualizar una variable externa o modificar el DOM.
//Retorno: No retorna ningún valor; siempre retorna undefined.//
//Modificación de Arreglo: No modifica el arreglo original.//
/*Uso Típico: Cuando simplemente quieres ejecutar un código para cada elemento del arreglo sin necesidad de transformar el arregloen sí.*/

var numbers = [1, 2, 3];
numbers.forEach((number) => {
  console.log(number * 2); // Imprime 2, 4, 6
});

/*map*/
//Propósito: Crear un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original. Se utiliza para transformar los elementos del array en un nuevo arreglo.
//Retorno: Retorna un nuevo arreglo que contiene los resultados de aplicar la función.//
//Modificación de Arreglo: No modifica el arreglo original, sino que devuelve un nuevo arreglo.//
//Uso Típico: Cuando quieres transformar los elementos del arreglo y obtener un nuevo arreglo con los resultados.//

var numbers = [1, 2, 3];
var doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Imprime [2, 4, 6]

/*forEach cuando quieras realizar una acción sobre cada elemento sin crear un nuevo arreglo, y usa map cuando quieras crear un nuevo arreglo basado en los valores transformados de un arreglo existente.*/
