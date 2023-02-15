//Las variables globales se instancían en el objeto window.
/*Si no declaras una variable con var, let, const y SÓLO la asignas, POR DEFECTO VA A PASAR A SER UNA VARIABLE GLOBAL.*/

//Variable declarada dentro de una función. Es local a su función.

function countries() {
  var country = 'Mexico';
  console.log(country);
}
countries();
console.log(country);

//Una variable sin declarar dentro de una función pasa a ser una variable global.

function myCountries() {
  country = 'Mexico';
  console.log(country);
}
myCountries();
console.log(country);