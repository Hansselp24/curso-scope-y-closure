//variables

var a;// declarando 
var b = 'b'; // declarando e inicianilizamos

b = 'bb'// reinicializasion(darle un nuevo valor a b)
var a = 'aa'; // redeclaracion(crear una nueva variable a partir de a)

//Global Scope 
// Para que una variable sea global tiene que estar fuera de culquir bloque de codigo o funcion que no permita su ejecucion externamente.
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();
console.log(fruit);

//Ejemplo 2
function countries() {
    //al no ser declarada con var, let o const la dejamos con un scope global y se puede usar en cualquier parte del codigo.
    country = 'Mexico';//Global
    console.log(country);
}

countries();
console.log(country);
