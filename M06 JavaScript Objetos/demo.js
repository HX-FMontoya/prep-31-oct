// Array -> coleccion de elemntos
var arr = [1, 2, 3, false, "hola"];
//            ^
console.log(arr);
// Acceder a los elementos de un array
arr[0]; // -> 1
arr.at(4); // "hola"

// Objetos -> coleccion de pares clave-valor
// una propiedad es la similitud de clave
// clave    valor
// key      value
// nombre: "Felipe"
// apellido: "Ciro"
// edad: 25
var usuario1 = {
  nombre: "Felipe",
  apellido: "Ciro",
  edad: 25,
  online: true,
  amigos: ["Ana", "Carmen", "Juan"],
  nombreMadre: "Aurora",
  madre: {
    nombre: "Aurora",
  },
  // Un metodo es una propiedad que aloja una funcion en un objeto
  saludarAMama: function () {
    // El this en un metodo, apunta al objeto que contiene a dicho metodo
    console.log(this);
    return "Hola " + this.nombreMadre;
  },
};
// Para recorrer un objeto, usamos el for in, el cual itera parecido al forEach de los arrays
for (var key in usuario1) {
  // key -> la propiedad
  // key = "apellido"
  console.log(usuario1[key]); // -> devuelve el valor de la propiedad del objeto
  if (key === "amigos") {
    usuario1[key].forEach(function (elem) {
      console.log(elem);
    });
  }
}

// hasOwnProperty es un metodo de objetod que evalua si una propiedad existe en el objeto
console.log(usuario1.hasOwnProperty("nombre"));

// El objeto this es nativo de javascript, es usado en multiples ocasiones
// De esta manera agregamos propiedades a un objeto
this.nombre = "Prueba";
console.log(this);

usuario1.pais = "Colombia";
// De esta manera borramos propiedades a un objeto
delete usuario1.online;
// Ejecutando el metodo de un objeto
console.log(usuario1.saludarAMama());

// Accediendo a los valores de un objeto
// 1. DOT NOTATION -> notacion de punto
usuario1.apellido; // "Ciro"
// 2. BRACKET NOTATION -> notacion de brakets
usuario1["apellido"]; // "Ciro"
// Utilizamos bracket notation, cuando la propiedad a la que queremos acceder, no sabemos como se llama y esta alojada en una variable
var ejemplo = "apellido";

// la variable ejemplo almacena un string que es el nombre de una de las propiedades del objeto, accede a esa propiedad y devuelve su valor
// usuario1[ejemplo] -> usuario1["apellido"]
// ver la actualizacion del objeto
console.log(usuario1);

function agregarAmigo(amigo, objeto, propiedad) {
  // propiedad -> "amigos"
  // ["Ana", "Carmen", "Juan"]
  objeto[propiedad].push(amigo);
}
// Probando instancias para modificar el objeto.
agregarAmigo("Julian", usuario1, "amigos");
console.log(usuario1);
