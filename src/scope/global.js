var a; //declaramos variable
var b = b; //Declaramos y asignamos "inicializamos"
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion

//Global scope
//cualquier variable que se encuentre en el documento pasa a ser variable global
//podemos acceder a ella en cualquier parte del documento.

var fruit = 'Apple'; //globalscope

function bestfruit () {
console.log(fruit);
}

bestfruit();

//hay que tener cierto cuidado a la hora de declarar una variable

function countries() {
    country = 'Honduras'; //asignamos el valor como global, sera accedido desde fuera
    console.log(country); 

}

countries();
console.log(country);