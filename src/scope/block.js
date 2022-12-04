//el scope de bloque llego en ECMA6, y basicamente da a entender que todas las variables que usemos dentro del bloque de codigo(if,for,if...else,for-in,etc) solo pueden ser llamadas dentro de ese mismo bloque y NO fuera del bloque.

// TODO aquello que este dentro de HandleBars(osea "{}") sera tomado como un bloque.

function fruits() { 
    //las variables CONST y LET no tienen el scope function,solo VAR puede ser llamada fuera del bloque(dentro de la funcion), pero no fuera de la funcion.    
    if (true) {
        var fruit1 = 'Apple';// Function Scope
        let fruit2 = 'Pear';// Block Scope
        const fruit3 = 'Banana';// Block Scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);   
}

fruits();