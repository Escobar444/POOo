const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//moldeado de la clase persona
abstract class Persona {
    constructor(public nombre: string){}
// el padre dice que todos saludan, pero no sabe el idioma
    abstract saludar(): void;
}

//clase hija que hereda de persona
class salvadoreño extends Persona {
    saludar(): void {
        console.log("¡hola que tal! me llamo  " + this.nombre);
    }
}

class ingles extends Persona {
    saludar(): void {
        console.log("Hello¡ My name is " + this.nombre);
    }
}

//interacción con el usuario

console.log("simulador de saludos");

rl.question("¿Cuál es tu nombre? ", (nombre: string) => {
    rl.question("¿Elige idioma(1: Español, 2: Inglés)? ", (opción: string) => {

        let alguien: Persona;

        if (opción === "1") {
            alguien = new salvadoreño(nombre);
        } else {
            alguien = new ingles(nombre);
        }

        alguien.saludar();
        rl.close();
    });
});
