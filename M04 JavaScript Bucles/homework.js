/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
  // x -> 3  || y -> 6
  // "x" e "y" son números enteros.
  // Retornar el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  // return x > y ? x : y
  if (x > y) return x;
  else if (x < y) return y;
  else return x || y;
}

console.log(obtenerMayor(3, 6)); // 6
//console.log(obtenerMayor(6,3)) // 6

function mayoriaDeEdad(edad) {
  // edad -> 18
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años ó más debe retornar el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  if (edad >= 18) return "Allowed";
  else return "Not allowed";
}
console.log(mayoriaDeEdad(18)); // Allowed

function conection(status) {
  // status -> 1
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  //? IF - ELSE
  /* if (status === 1) return "Online";
   else if (status === 2) return "Away";
   else return "Offline"; */
  //? SWITCH -> observa un parametro
  switch (status) {
    // los casos o valores que va a tomar status
    case 1:
      return "Online";
    case 2:
      return "Away";
    default:
      return "Offline";
  }
}
console.log(conection(1));

function saludo(idioma) {
  // idioma -> "ingles"
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
  // Tu código:
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";
  }
}
console.log(saludo("ingles"));
console.log(saludo("aleman"));
// console.log(saludo("mandarin"));
// console.log(saludo());

function colors(color) {
  // color -> "red"
  // La función recibe un color. Retornar el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // IMPORTANTE: utilizar el statement SWITCH.
  // Tu código:
  /* switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  } */
  if (
    color === "blue" ||
    color === "red" ||
    color === "orange" ||
    color === "green"
  ) {
    return "This is " + color;
  } else {
    return "Color not found";
  }
}
console.log(colors("bluee"));

function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if (num === 10 || num === 5) return true;
  else return false;

  switch (num) {
    case 5:
      return true;
    case 10:
      return true;
    default:
      return false;
  }

  return num === 5 || num === 10 ? true : false;
}

function estaEnRango(num) {
  // Retornar true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  //  5 10 20 25 .... 45 50 55 60
  //        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // ^^^^^^^^^^^^^^^^^^^^
  //       |             |
  if (num > 20 && num < 50) return true;
  else return false;

  return num > 20 && num < 50 ? true : false;
}

function esEntero(num) {
  // -0.6
  // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  // solucion 1
  /* if (num < 0) {
      num = -1 * num
   }
   var operacion = Math.ceil(num) - num
   //                     1  - 0.6
   console.log(operacion)
   if (operacion === 0) return true
   return false */

  // solucion 2
  if (num % 1 === 0) return true;
  else return false;
}

var numero = -1;
console.log(esEntero(numero));
console.log(numero);

function fizzBuzz(num) {
  // num -> 15
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  // 8 es divisible entre 2? si, porque su resto es 0
  var validacion_con_3 = num % 3 === 0;
  var validacion_con_5 = num % 5 === 0;
  if (validacion_con_3 && validacion_con_5) return "fizzbuzz";
  else if (validacion_con_3) return "fizz";
  else if (validacion_con_5) return "buzz";
  else return false;
}
console.log(fizzBuzz(4));

function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  // Si todos los argumentos son cero, retornar ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retornar false.
  // Tu código:
  // 5 -1 2
  // Si todos estan cumpliendo una condicion al mismo tiempo
  if (num1 === 0 && num2 === 0 && num3 === 0) return "Error";
  else if (num1 > num2 && num1 > num3 && num1 > 0)
    return "Numero 1 es mayor y positivo";
  else if (num3 > num1 && num3 > num2) return ++num3;
  else if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
  else return false;
}
console.log(operadoresLogicos(5, -1, 2));

function esPrimo(num) {
  // Retornar true si "num" es primo.
  // De lo contrario retorna false.
  // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
  // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
  // [Nota]: los números negativos, 0 y 1 NO son números primos.
  // Tu código:
  // 1. como hago para saber si un numero es primo?
  // 11 es primo?
  // 11 | 7 su residuo es cero? si es cero significa que el 2 es un multiplo
  // 0    6

  if (num <= 1) {
    return false;
  }
  // i = 2
  // operacion = 17 % 17
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(esPrimo(7));

function esVerdadero(valor) {
  // Si "valor" es verdadero retornar "Soy verdadero".
  // Caso contrario, retornar "Soy falso".
  // Tu código:
  if (valor === true) return "Soy verdadero";
  else return "Soy falso";
}

function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  return num.toString().length === 3 ? true : false;
}
var num = 34;
console.log("hola".length);
console.log(num.toString().length);

function doWhile(num) {
  // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
  // Retornar el valor final.
  // Utilizar el bucle Do-While.
  // Tu código:
  var contador = 1;
  do {
    num = num + 5;
    contador++;
  } while (contador < 9);
  return num;
}
console.log(doWhile(0));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile,
};
