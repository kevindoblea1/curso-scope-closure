// la asignacion de variables inicio con var
// actualizacion de ecmascript6 se introduco let y const

// flujo, declarar, asignar, mostrar
var firistNAme;
// cuando se declara, se la asigna un valor undefined
firistNAme = 'Oscar';
//mostramos
console.log(firistNAme);

// flujo, declarar y asignar, reasignar.
var lastName = 'Alvarenga'; //declarar  /asignar
lastName = 'Espinoza'; //reasignar
console.log(lastName);

var secondName = 'Kevin'; //declarando /asignando
var secondName = 'Ariel'; //reasignando.
console.log(secondName);

// el caso de let y console.
let fruit =  'Apple'; // Declarar /asignar

fruir  = 'Kiwi'; //reasignar

// let fruit = 'Banana'; // no podemos declarar nuevamente la misma variable en este bloque.
console.log(fruit);

// const 
const animal = 'dog'; // Declara y asigna

//animal = 'cat';
console.log(animal); // el resultado es error, pues no permite reasignar la constante


const vehicles = [];
vehicles.push('toyota');
console.log(vehicles);
// En el caso de los arrays se permite utilizando los metodos de los array

vehicles.pop('toyota');
console.log(vehicles);
//la inmutabilidad no se aplica a algunos conceptos, dentro de las funciones