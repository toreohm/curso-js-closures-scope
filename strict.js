"use strict";

nombre = "Andres";
console.log(nombre); // ReferenceError: nombre is not defined;

//Otro ejemplo
function myFunction() {
  "use strict";
  return pi = 3.14;
}

console.log(myFunction()); // ReferenceError: pi is not defined