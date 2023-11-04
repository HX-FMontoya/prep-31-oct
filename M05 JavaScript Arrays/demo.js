var arreglo = ["hola", "chao", "como te va"];
//posiciones                        i
//                0        1         2

console.log(arreglo.length - 1);

console.log("hola".charAt(3));
console.log(arreglo.at(-1));
console.log(arreglo[arreglo.length - 1]);

for (var i = 1; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

// forEach -> No modifica el arreglo original

var otro1 = arreglo.forEach(function (elem) {
  // inddiferente ->?
  elem = elem + " a";
  console.log(elem);
  return elem;
});
console.log(otro1);

// map -> devolver un nuevo array con los elementos modificados

var otro = arreglo.map(function (elem, indice) {
  elem = elem + " " + indice;
  return elem;
});
// primera vuelta -> elem -> "hola", indice -> 0
// segunda vuelta -> elem -> "chao", indice -> 1
// ["hola 0", "chao 1"]
console.log(otro);

// filter -> devuelve un nuevo array con los elementos que cumplan cierta condicion
console.log(arreglo);
var numeros = [1, 2, 3, 4];
//                      ^             acum = 10
// acum = acum + elem
var filtrados = numeros.filter(function (elem) {
  if (elem === 3) return elem;
});
console.log(filtrados);
// reduce -> devuelve un numero, luego de haber operado todos los elementos del array
var total = numeros.reduce(function (acum, elem) {
  // acum = 0
  acum = acum + elem;
  return acum;
}, 10);
console.log(total);

// Metodos de arreglos

var arr = [1, 2, 3];
console.log(arr);
// push -> agrega un elemento al final del array y devuelve la longitud del nuevo array
var prueba = arr.push(7);
console.log(prueba);
console.log(arr);
// pop -> elimina un elemnto al final del array y devuelve el elemento que borro
var prueba2 = arr.pop();
console.log(prueba2);
console.log(arr);
// unshift -> Agrega un elemento al principio del array y devuelve la longitud del nuevo array
var prueba3 = arr.unshift(0);
console.log(prueba3);
console.log(arr);
// shift -> quita un elemento al principio del array y devuelve el elemento que borro
var prueba4 = arr.shift();
console.log(prueba4);
console.log(arr);
//

//
//lkjlk

// Objeto Arguments -> Es propio de las funciones, es un objeto, que se comporta como un arreglo, contiene todos los parametros de la funcion

function saludar(...nombre) {
  // ["Español"]
  arguments;
  return props;
}
console.log(saludar("Español", "Jairo", "Hola, que mas, como estas?"));
