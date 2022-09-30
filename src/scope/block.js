// Block Scope, nos permite crear variables dentro de bloques, que solo podrán ser usadas dentro de esos mismos bloques, sin embargo si se usar "var" como variable, esta si permitirá ser llamada por fuera del bloque, por eso se recomienda solo usar let y const

function fruits () {
    if (true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Kiwi"; // block scope
        const fruit3 = "Banano"; // block scope

        console.log (fruit2);
        console.log (fruit3);
    }

    console.log (fruit1);
    
}

fruits();