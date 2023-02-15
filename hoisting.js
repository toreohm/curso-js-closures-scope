nameOfDog();

function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`);  //ReferenceError: elmo is not defined
}

//---------------------------------

nameOfCat();

function nameOfCat() {
  console.log(`El mejor gatito es ${elmo}`);  //El mejor gatito es undefined
}

var elmo = "elmo";