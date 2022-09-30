var firstName; // declaración
firstName = "Oscar"; // asignación
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = "Ana"; // reasignar
console.log (lastName);

var secondName = "David"; // declarar / asignar
var secondName = "Ana"; // redeclaración
console.log(secondName);

// Let solo nos permite declar, asignar y reasignar según se requiera, pero no deja redeclarar

let fruit = "Apple"; // decla ra y asigna
fruit = "kiwi"; // reasignar

let fruit = "Banana";
concole.log(fruit);


//const - permite declarar y asignar, pero no reasignar ni redeclarar.
const animal = "dog"; // declara y asigna
animal = "cat" //reasignar
console.log(animal)

// pero no en todo, si le asignamos un array a la constante, luego se podría manipular
const vehicles = [];
vehicles.push("carrito");
console.log(vehicles);

vehicles.pop();
console.log(vehicles)