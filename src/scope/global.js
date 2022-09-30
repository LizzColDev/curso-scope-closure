// variable

var a; // declaramos la variable

var b = "b"; // declaramos y asignamos

b= "bb"; // reasignar

var a = "aa"; // redeclaración 

// Global Scope
//Cualquier variable que tenemos dentro del documento la podremos usar y leer dentro de bloques de código

var fruit = "Apple"; // global
console.log(fruit);
function bestFruit () {
    console.log (fruit);
}

bestFruit();


function countries (){
    country = "Colombia"; // se asignó la variable pero nunca se declaró, al hacerlo ahí se está declarando como global y podrá ser usado desde fuera de la función
    console.log(country);
}

countries();
console.log(country);