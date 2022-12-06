// Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito con el cual se creó. Puedes entender los closures como: función interna + scope. Mira estos pasos:
// -Genera una función que retorna una función interna.
// -Esta función interna tiene un scope, el cual puede ser accedido únicamente por esta función, es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por la función interna.
// -Como resultado, esta función interna retornada con su scope será nuestro closure.

// Ámbito Léxico
// El ámbito léxico se refiere al alcance de una variable siguiendo la cadena de scopes. Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario.(de adentro hacia afuera).
/*function contador ( i ) {
    let acumulador = i
    function aumentar () {
      console.log(acumulador);
      acumulador = acumulador + 1
    }
    return aumentar
  };
  
  const closure = contador(1)
  closure() // 1
  closure() // 2
  closure() // 3
  
  const closure2 = contador(10);
  closure2() // 10
  closure2() // 11
  
  closure() // 4*/

//Ejemplo
const myGlobal = 0;

function myFunction() {
    const myConst = 1;
    console.log(myGlobal);

    function parent() {
        const inner = 2;
        console.log(myConst, myGlobal);

        function child () {
            console.log(inner, myConst, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();

//Mi Solucion(da el mismo resultado pero en distanta manera)
function sumWithClosure2(num1, num2) {
    let total = num1 + num2;
    return total;
}

  console.log(sumWithClosure2(2,3));

  //Solucion de un Closure para sumar("correcta")
  function sumWithClosure(firstNum) {
    return function (secNum) {
      return firstNum + (secNum ?? 0);
    }
  }
  
  console.log(sumWithClosure(2)(3)); 

