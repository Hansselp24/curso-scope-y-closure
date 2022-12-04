function greeting() {
    // solamente se usa dentro de la funcion.
    // seria una scope function.
    var userName = 'Diego';
    console.log(userName);

    if(userName === 'Diego') {
        console.log(`Hola ${userName}!`);
    }
}

greeting();
//Al ser una variable declarada e inicializada dentro de la funcion, el scope no deja que salga fuera de esta misma.
console.log(userName);