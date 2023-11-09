// Prototype: Es unobjeto que se vincula a otro objeto
var objetoPadre = {
  numero: 3,
};
// Herencia prototipica
var obj = Object.create(objetoPadre);
console.log(obj);
console.log(obj.__proto__);
// cadena prototipida
console.log(obj.numero);
// Darle props a un objeto
obj.edad = 5;
console.log(obj);
console.log(obj.__proto__);
Object.assign(objetoPadre, { name: "Feli" });
console.log(obj);
console.log(objetoPadre);
console.log(objetoPadre.__proto__);

// CLASES -> plantilla de un objeto

// notacion funcional
console.log(this);
function Car(marca, color) {
  this.marca = marca;
  this.color = color;
  this.matricula = true;
  this.meep = function () {
    return "Meep meep!";
  };
}

// Plantilla de Carro que tiene, marca y color
// instancia de Carro -> Nissan -> Car("Nissan", "Azul")

var nissan = new Car("Nissan", "Azul");
console.log(nissan.meep());
var cheverolet = new Car("Cheverolet", "Rojo");
console.log(cheverolet);
console.log(nissan, cheverolet);

// notacion de clase incorporo en 2015
class Carro {
  constructor(marca, color) {
    this.marca = marca;
    this.color = color;
    this.matricula = true;
    this.meep = function () {
      return "Meep meep!";
    };
  }
}
var bmw = new Carro("BMW", "blanco");
console.log(bmw.meep());

// Protipo -> Prototype

class Animal {
  constructor(raza, nombre) {
    this.raza = raza;
    this.nombre = nombre;
  }
  comer() {
    return "Estoy comiendo!";
  }
}

var gato = new Animal("felino", "Michi");
console.log(gato);

var perro = new Animal("pastor aleman", "Zeus");
console.log(perro);

// SubClase

class Perro extends Animal {
  constructor(raza, nombre) {
    super(raza, nombre); // Animal(raza, nombre); -> {raza: "", nombre: ""}
  }
  ladrar() {
    return "Guau!";
  }
}
var perro1 = new Perro("pastor aleman", "Apolo");
console.log(perro1.ladrar());

class Gato extends Animal {
  constructor(raza, nombre) {
    super(raza, nombre);
  }
  meow() {
    return "Meow!";
  }
}

var gato1 = new Gato("razaX", "chimuelo");
console.log(gato1.meow());

// CallBacks -> una funcion que es pasada como argumento a otra funcion -> cb

function suma(a, b, cb) {
  var operacion = a + b;
  var cantidadDeArgs = arguments.length - 1;
  return cb(operacion, cantidadDeArgs);
}

function promedio(suma, args) {
  console.log(suma, args);
  return suma / args;
}

console.log(suma(2, 3, promedio));

//

function saludar(nombre, cb) {
  var saludo = cb(nombre); // mensaje
  return saludo;
}

function mascota(nombre) {
  return "Hola!, soy " + nombre;
}

console.log(saludar("Pluto", mascota));
