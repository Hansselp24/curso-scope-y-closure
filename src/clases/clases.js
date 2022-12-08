//Clases. una clase es una plantilla para crear distintos objetos con las mismas caracteristicas.las clases son una funcion que por dentro tienen un CONSTRUCTOR en donde se declaran los atributos que llevara cada objeto, tambien tienen metodos(funciones);

//Crearemos dos personajes con la misma clase.

//Hoisting en clases
//en las classes No existe el hoisting como en una funcion normal. No se puede mandar llamar antes sino hasta despues del codigo

class Player{
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }

    saltar(){}
    correr(){}
    saludar(){
    return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }

    get nombre() {
        return this._nombre;
    }

    set cambiarNombre(nuevoNombre){
         this._nombre = nuevoNombre;
    }
}

let player1 = new Player('Mario', 'Rojo');
let player2 = new Player('Luigui', 'Verde');

//console.log(player1);

//console.log(player1.saludar());
//console.log(player2.saludar());

//GET-mostrar
//console.log(player1.nombre);

//SET-modificar
//player1.cambiarNombre = 'Alberto'
//console.log(player1.nombre);

//----SubClases----

class Pet extends Player {
    constructor(nombre, colorSombrero, colorPiel, colorOjos){
        super(nombre, colorSombrero);
        this._colorPiel = colorPiel;
    }

    piel() {
        return `Hola soy ${this.nombre} y mi piel es ${this.colorPiel}`;
    }

    get colorPiel() {
        return this._colorPiel;
    }

    set cambiarColorPiel(nuevoColorPiel) {
        this._colorPiel = nuevoColorPiel;
    }
}

let player3 = new Pet('Yoshi', 'Invisible', 'Verde');
let player4 = new Pet('Pish','Corona','Blanca');

//console.log(player3);
player4.cambiarColorPiel = 'Blanca'
//console.log(player4.colorPiel); //Blanca

console.log(player3.piel());
console.log(player4.piel());

player3.cambiarColorPiel = 'Purpura';
console.log(player3);