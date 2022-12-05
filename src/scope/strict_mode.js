// El modo estricto tiene varios cambios en la semántica normal de JavaScript:

// -Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
// -Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
// -Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.

// El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

// Este en el código colocando en la primera línea "use strict" para todo el archivo. También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.

//usando modo strict en una variable
'use strict';
pi = 3.1416;
console.log(pi);

//en una Function
function myFunction() {
    'use strict'
    let pit;
    return pit = 3.1416;
}

console.log(myFunction());