var a = "Hello global";

function hello() {
  let b = "Hello function";

  if(true) {
    let c = "Hello block";
    debugger; // <---- Palabra reservada para debbuging
  }
}

hello();