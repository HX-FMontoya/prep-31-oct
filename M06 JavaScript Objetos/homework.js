/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
  // nombre -> ""
  // edad -> ""
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  // Objetos literales -> 2015
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    },
  };
  return gato;
}
var objetoGato = crearGato("Michi", 1);
console.log(objetoGato.meow());

function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retornar el objeto.
  // Tu código:
  var usuario = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return usuario;
}

function agregarPropiedad(objeto, propiedad) {
  // objeto -> {nombre: null}
  // propiedad -> "nombre"
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  objeto[propiedad] = null;
  return objeto;
}
// console.log(agregarPropiedad({}, "nombre"))

function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  // Tu código:
  objeto[metodo]();
  // obj["saludar"]()
}

var obj = {
  nombre: "Feli",
  saludar: function () {
    return "Hola " + this.nombre;
  },
};
invocarMetodo(obj, "saludar");

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}

function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario.email) return true;
  else return false;
  // return objetoUsuario.email ? true : false
}

var obj = {
  edad: 22,
};
console.log(obj.nombre);

function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  /* if (objeto[propiedad]) return true
   else return false */
  // hasOwnProperty
  if (objeto.hasOwnProperty(propiedad)) return true;
  else return false;
  // return objeto.hasOwnProperty(propiedad) ? true : false
  // return objeto.hasOwnProperty(propiedad)
}

function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario.password === password) return true;
  else return false;
  // return objetoUsuario.password === password ? true : false
  // return objetoUsuario.password === password
}

var usuario = {
  nombre: "Felipe",
  password: "1234",
};
console.log(verificarPassword(usuario, "1234"));

function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
}
console.log(actualizarPassword(usuario, "123"));

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
}
var objetoFelipe = {
  nombre: "Felipe",
  amigos: ["Mariana", "Fernando", "Tomas"],
};
console.log(agregarAmigo(objetoFelipe, "Byron"));

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  objetoMuchosUsuarios.forEach(function (usuario) {
    usuario.esPremium = true;
  });
  return objetoMuchosUsuarios;
}
var muchosUsuarios = [
  { nombre: "Mariana", esPremium: false },
  { nombre: "Tomas", esPremium: false },
  { nombre: "Fernando", esPremium: false },
  { nombre: "Byron", esPremium: false },
];

console.log(pasarUsuarioAPremium(muchosUsuarios));

function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  return objetoUsuario.posts.reduce(function (acum, post) {
    acum = acum + post.likes;
    return acum;
  }, 0);
}
var objeto = {
  nombre: "Feli",
  posts: [
    { description: "JS es lo mejor", likes: 60 },
    { description: "Next es lo mejor", likes: 40 },
    { description: "Java es lo mejor", likes: 10 },
    { description: "Python es lo mejor", likes: 30 },
  ],
};

console.log(sumarLikesDeUsuario(objeto));

function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function () {
     return this.precio - (this.precio * this.porcentajeDeDescuento)
   }
   return objetoProducto
}
var objetoLaptop = {
  precio: 1000,
  porcentajeDeDescuento: 0.2,
};
var nuevoObjetoLaptop = agregarMetodoCalculoDescuento(objetoLaptop)
console.log(nuevoObjetoLaptop.calcularPrecioDescuento());

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearGato,
  nuevoUsuario,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
