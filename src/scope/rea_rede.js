var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

//Reasigancion 
var lastName = 'Ozuna';
lastName = 'Perez';
console.log(lastName);

//Redeclaramos
var secondName = 'John';
var secondName = 'Eduard';
console.log(secondName);

//LET

let fruit = 'Apple';// declarar e inicializar
fruit = 'Kiwi';// reasignar
console.log(fruit);

//esta variable ya no se puede Redeclarar por el scope que la protege.
// let fruit = 'banana';

//CONST
//const es una variable que no cambia de valor y no se le puede reasignar uno nuevo.
const animal = 'Monkey';//decalracion e inicializacion
//animal = 'Lyon' //reasignacion
//const animal = 'Dog';
console.log(animal);

// ejemplo 2
const vehicles = [];
vehicles.push("Hola Mundo");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
