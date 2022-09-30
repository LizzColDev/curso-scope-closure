// Function Scope, se declaran y asignan variables dentro de funciones, que solo podrán ser usadas dentro de las mismas funciones (no son globales)

function greeting () {
    let userName = "Ana";
    console.log(userName);

    if (userName === "Ana") {
        console.log(`Hello ${userName}`)
    }
}

greeting();

console.log(userName); // nos generará undefined, porque la declaramos dentro de la función y no se puede hacer uso desde fuera de ella
