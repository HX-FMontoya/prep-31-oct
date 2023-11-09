var arr = ["hola", true, 60];
//                  ^
console.log(arr.at(2));
console.log(arr[1]);

// OBJETOS
var obj = {
  nombre: "Feli",
  edad: 25,
  dni: 1234567,
  saludo: function () { 
    return "hola " + this.nombre
  }
};
console.log(obj.saludo())

for (var propiedad in obj) {
  console.log(propiedad)
  console.log(obj[propiedad])
}

console.log(obj.nombre)
console.log(obj["edad"])
console.log(Object.keys(obj))
console.log(Object.values(obj));
console.log(Object.entries(obj));
var anonimo = "dni"
console.log(obj[anonimo]) 

obj["nombre"]= "Jorge"
console.log(obj)

delete obj

console.log(obj)
