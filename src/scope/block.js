function fruits () {
    //despues de emacscrips 6, las variables definidas dentro de un bloque, solo pueden
    //ser utilizadas dentro de este bloque
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit2);
    console.log(fruit3);
    }
    console.log(fruit1);
    
}
fruits();