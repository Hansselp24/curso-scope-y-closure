// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

// El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

// Buenas prácticas para usar hoisting

// No utilices var en las declaraciones de variables.
// Escribe primero las funciones y luego su invocación.

// Hoisting en variables declaradas con VAR
// En el siguiente código, la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.

console.log(nombre) // undefined
var nombre = "Andres" 

//Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"

// Hoisting en funciones
// Mira el siguiente código y piensa cuál sería el resultado del console.log.

console.log( saludar() )

function saludar() {
  return "Hola"
}

// La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.

// Hoisting
function saludar() {
    return "Hola"
  }
  
  console.log( saludar() ) // "Hola"


//   Hoisting de variables dentro de una función
// El hoisting desplaza las declaraciones a la parte superior del scope más cercano, en el caso de una función dentro de otra función, seguiría el siguiente comportamiento.

function scope() {
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  var nombre = "Andres"
  var edad = 20
  for (var i = 0; i< 6; i++) {
  //...
  }
}

//Hoisting y la interpretacion de JS.
function scope() {
    var nombre = undefined
    var edad = undefined
    var i = undefined
    
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    nombre = "Andres"
    edad = 20
    for ( i = 0; i< 6; i++) {
    
    //
    }
  }
 
