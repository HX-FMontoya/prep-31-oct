/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // array -> [1,2,3,4] -> 1
  //           ^
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  var valor = array[0];
  return valor;
  return array.shift();
}
console.log(devolverPrimerElemento([1, 2, 3, 4]));
// Poner en marcha quokka -> shift + ctrl + p

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  // [1,2,3,4,5] -> length -> 5
  //          ^  -> indice del ultimo -> 4
  var ultimoIndice = array.length - 1;
  var valor = array[ultimoIndice];
  console.log(valor);
  return valor;
  return array.pop();
}
console.log(devolverUltimoElemento([1, 2, 3, 4, 5]));

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  var results = [];
  console.log(array);
  array.forEach(function (elem) {
    console.log(elem);
    elem = elem + 1;
    results.push(elem);
    console.log(elem);
  });
  console.log(array);
  return results;
}
console.log(incrementarPorUno([1, 3, 5, 7]));

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  // [2,3,4]   5
  array.push(elemento); // devuelve la lomgitud del nuevo array
  // [2,3,4,5]
  return array;
}
console.log(agregarItemAlFinalDelArray([2, 3, 4], 5));

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  // [2,3,4]  1
  array.unshift(elemento); // devuelve la longitud del nuevo array
  return array;
  // [1,2,3,4]
}
console.log(agregarItemAlComienzoDelArray([2, 3, 4], 1));

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  // ["Hola", "como", "estas"] -> Hola como estas
  return palabras.join(" "); // Hola como estas
}
console.log(dePalabrasAFrase(["Hola", "como", "estas"]));

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  return array.includes(elemento);
}
console.log(arrayContiene([1, 2, 3], 6));

function agregarNumeros(arrayOfNums) {
  // arrayOfNums -> [2,4,6,7,8]
  //                 ^
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce(function (acum, element) {
    acum = acum + element;
    return acum;
  });
}
console.log(agregarNumeros([2, 4, 6, 7, 8]));

function promedioResultadosTest(resultadosTest) {
  // resultadosTest -> [2,4,6,7,8]
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  // promedio = suma de todos los elementos / cantidad de elementos
  //   agregarNumeros(resultadosTest)    /   obtenerLargoDelArray(resultadosTest)
  return agregarNumeros(resultadosTest) / obtenerLargoDelArray(resultadosTest);
}
console.log(promedioResultadosTest([2, 4, 6, 7, 8]));

function numeroMasGrande(arrayOfNums) {
  // arrayOfNums -> [-2,5,8,1,40,4,5,2]
  //                                 ^
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  var numeroMasGrande = -Infinity; // -2 // 5 // 8 // 40
  /*
  for (var elemento of arrayOfNums) {
    if (elemento > numeroMasGrande) {
      numeroMasGrande = elemento;
      console.log(numeroMasGrande);
    }
  }
  */
  arrayOfNums.forEach(function (el) {
    if (el > numeroMasGrande) numeroMasGrande = el;
  });
  return numeroMasGrande;
}
console.log(numeroMasGrande([-2, 5, 8, 1, 40, 4, 5, 2])); // 40

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código: {}[0]
  if(arguments.length === 0) return 0
  var total = 1; // 3 // 3 // 12
  for (var el of arguments) {
    console.log(el);
    total = total * el;
  }
  return total;
}
console.log(multiplicarArgumentos(5));

function cuentoElementos(array) {
  // array -> [19,10,17,18,20]
  //                       ^
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  var filtrados = array.filter(function (elem) {
    if (elem > 18) return elem;
  });
  console.log(filtrados);
  return obtenerLargoDelArray(filtrados);
  // [19, 20]
}
console.log(cuentoElementos([19, 10, 17, 18, 20])); // 2

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  // == vs ===
  // valor vs valor y tipo de dato
  if (typeof numeroDeDia !== "number") throw Error("Solo numeros");
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else if (1 < numeroDeDia && numeroDeDia < 7) {
    return "Es dia laboral";
  } else {
    return "No es ningun dia disponible";
  }
}
console.log(diaDeLaSemana(17));

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  // "90" -> "9" == 9
  if (num.toString()[0] == 9) return true;
  else return false;
  // return num.toString()[0] == 9 ? true : false
}
console.log(empiezaConNueve(70));

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  var elementoReferencia = array[0];
  // elementoReferencia = 9
  return array.every(function (elem) {
    return elem === elementoReferencia;
  });
}
console.log(todosIguales([9, 9, 9, 9, 9, 9]));

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var filtrados = array.filter(function (el) {
    if (el === "Enero" || el === "Marzo" || el === "Noviembre") return el;
  });
  var conjunto = new Set(filtrados);
  console.log(conjunto.size);
  if (conjunto.size < 3) return "No se encontraron los meses pedidos";
  else return filtrados;
  // ["Enero", "Enero", "Marzo", "Noviembre"]
}
console.log(mesesDelAño(["Enero", "Febrero", "Enero", "Marzo", "Noviembre"]));
// ["Enero", "Enero", "Marzo"]
console.log(new Set(["Enero", "Enero", "Marzo"]).size);

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  // 6 * 
  var tabla = [] // [0, 6, 12, 18,..., 60]
  for (var i = 0; i <= 10; i++){
    tabla.push(6 * i)
  }
  return tabla
}
console.log(tablaDelSeis())

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  return array.filter(function (el) {
    if(el > 100) return el
  })
}
console.log(mayorACien([101,99,200,199]))

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
