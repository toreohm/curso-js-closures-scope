/*El scope local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un bloque de código del programa. Un bloque de código es todo aquello que está dentro de los caracteres de llaves {}. */
/*Hoisting en variables:
Hoisting es un término para describir que la declaración de variables y funciones son desplazadas a la parte superior del scope más cercano.*/
/*var no tiene scope de bloque y se debe tener cuidado porque puede provocar errores en el código. Con excepción  dentro de una función, ahí var sí se vuelve LOCAL la función.*/

let x = 5
{
  console.log(x) // ReferenceError: Cannot access 'x' before initialization
  let x = 10 
}


//Ejemplo de un bloque for con var con asincronismo.
/*La respuesta es diez veces 10, y sucede por el hoisting. La declaración de i se eleva hasta arriba de la función en el scope de función, por lo que cuando termine el ciclo este tendrá un valor de 10. */
function example() {
  for (var i = 0; i < 10; i++){
    setTimeout(function(){
      console.log(i);
    }, 1000);
  }
}
example();
//PERO...
function otroExample() {
  for (var i =0; i < 10; i++){
    console.log(i);
  }
}
otroExample();

//Ejemplo de un bloque for con let 
function example2() {
  for (let i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i);
    }, 1000);
  }
}
example2();
