//Cómo utilizar Closure para construir una alcancía
//con Closure podemos agregarle diferentes monedas a nuestra alcanzia y que las vaya sumando a lo que teniamos previamente guardadado, tambien se puee crear otra instancia(variable) con otro nombre sin afectar a la que ya tenias.
//----EJEMPLO 1 ----
/*function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`My MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}*/
// Mi alcacia
/*const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(100);

// Alcancia de Ana
const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(5);
moneyBoxAna(10);*/

//----EJEMPLO 2 ----
/*function crearContador2(){
    let contador = 0;    
    
    return function incrementar(){
            contador = contador + 1;
            return contador;
    };
}

const contador1 = crearContador2();
contador1();
contador1();*/
//funcions anidadas para devolver diferentes respuestas en su dependencia.

  function crearContador(){
      let contador = 0;
    
      return {
        incrementar: function(){
            contador = contador + 1;
            return contador;
        },
        decrementar: function(){
            contador = contador - 1;
            return contador;
        },
        obtenerValor: function(){
            return contador;
        }
    }; 
}

const contadorP = crearContador();
contadorP.incrementar();
contadorP.incrementar();
contadorP.incrementar();
contadorP.decrementar();
console.log(contadorP.obtenerValor());



//----EJEMPLO 3 ----
//uso de Closures para fabricar funciones:
//funciones fuera del closure
/*function error(str) {
    console.log(`%c Error: ${str} `,'background: red; color: white;');
}
error("el usuario no esta registrado");

 function warn(str) {
    console.log(`%c Warning: ${str} `,'background: #fabb03; color: black;');
}
warn("el usuario no tiene direccion");

function exit(str) {
    console.log(`%c Exito: ${str} `,'background: green; color: white;');
}
exit("usuario Registrado");*/

//funciones dentro de un Closure

    //lo copiamos en el console log con el signo de "+" para que nos tome por defecto.
    //hacer uso eficiente de la memoria de cada clausura, es decir que no se repita en cada error,warning, exito, etc, sino que todoas tengan una variable global para acceder a ella.
//const estilosPorDefecto = 'color: white';
/*function crearImpresoraDeMensajes(tipo, estilos) {
    
    return function mensaje(str) {
      console.log(`%c ${tipo}: ${str} `, estilos);
    }
  }
  
  const error = crearImpresoraDeMensajes('Error', 'background: red; color: white;');
  const warning = crearImpresoraDeMensajes('Warning', 'background: orange; color: white;');
  const exito = crearImpresoraDeMensajes('Éxito', 'background: green; color: white;');
  const info = crearImpresoraDeMensajes('Info','background: blue; color: white;')
  const javascrit = crearImpresoraDeMensajes('JS','background: blue; color: white;')*/


  //Clausuras y debugging

/*const estilosPorDefecto = 'color: white';
function crearImpresoraDeMensajes(tipo, estilos) {
    return function mensaje(str) {
      console.log(`%c ${tipo}: ${str} `, estilos);
    }
  }
  const error = crearImpresoraDeMensajes('Error', 'background: red; color: white;');*/


//---Ejercicio en Playground ----
/*export function createPetList() {
    let arrayPetList = [];
  
    function addPetList(animals) {
      if (!animals) {
        return arrayPetList;
      } else {
        arrayPetList.push(animals);
        console.log(arrayPetList);
      }
    }
    return addPetList;
    
  }
const petList = createPetList();
petList('perro');
petList('gato');
petList('pajarito');*/


/*const nameOfCat = function() {
    console.log(`El gatito se llama ${cat}`);
}

let cat = "IlloJuan";

nameOfCat()*/
