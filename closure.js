//Ejemplo de un closure
function alcancia(cantidadInicial) {
  let contenido = cantidadInicial;
   
   //Función definida dentro de una función. Está función tendrá acceso al scope padre.
   function guardar(monedas){
    let x = 5;

    //La variable x por ser declarada en este mismo scope de la funcion, será destruida una vez se termine de ejecutar dicha función. Es decir, no recordará el valor asignado. Ya que es una variable local a la función.
    x+=monedas; 
    console.log("Variable en scope inferior, x: ", x);
    
    //La variable contenido, por ser de un scope superior sí recordará su nuevo valor.
    contenido = contenido + monedas;
    return contenido;
  }
  
  //Retornamos la definición de la función hija.
  return guardar;
}

const miAlcancia = alcancia(2);
miAlcancia(5); // 7
miAlcancia(4); // 11

const otraAlcancia = alcancia(5);
otraAlcancia(30); // 35
otraAlcancia(20); // 55

//Ejemplo Practico de Closures

function prestamo(name="Juan", id=1, empresa="Patito", prestamoInicial=0) {
  let prestamo = prestamoInicial;  

  function darPrestamo(cantidad) {
    prestamo += cantidad;
    return {name, id, empresa, prestamo};
  }

  return darPrestamo;
}

const prestamoMaria = prestamo("Maria");
prestamoMaria(1);
prestamoMaria(10);
prestamoMaria(9);
