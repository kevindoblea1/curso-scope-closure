function greeting () {
    //las funciones tienen su propio alcance, las variables declaradas deben ser
    //accedidas solo por la funcion y sus heredadas
    let userName = 'Kevin'; // let nos permite crear variables locales dentro de las funciones.
    console.log(userName);

    if(userName==='Kevin'){
        console.log('Hello ' + userName + '!'); //puede ser accedido dentro de la funcion
    }
}
greeting();
console.log(userName); //la variable no es visible fuera de la funcion.
