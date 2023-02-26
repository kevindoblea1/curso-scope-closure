'use strict'; //si le decimos al documento que use el modo estricto, evitara que se asignen variables sin declarar.
//modo estricto fue incorporado en ecmascript 5
pi = 3.1415; // unicamente se asigna el valor, sin declarar
console.log(pi);
// asignar sin declarar
 function myFunction() {
    'use strict';
    return pi = 3.1415;
 }
console.log(myFunction());