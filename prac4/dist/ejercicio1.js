"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//moldeado de la clase persona
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
//clase hija que hereda de persona
class salvadoreño extends Persona {
    saludar() {
        console.log("¡hola que tal! me llamo  " + this.nombre);
    }
}
class ingles extends Persona {
    saludar() {
        console.log("Hello¡ My name is " + this.nombre);
    }
}
//interacción con el usuario
console.log("simulador de saludos");
rl.question("¿Cuál es tu nombre? ", (nombre) => {
    rl.question("¿Elige idioma(1: Español, 2: Inglés)? ", (opción) => {
        let alguien;
        if (opción === "1") {
            alguien = new salvadoreño(nombre);
        }
        else {
            alguien = new ingles(nombre);
        }
        alguien.saludar();
        rl.close();
    });
});
//# sourceMappingURL=ejercicio1.js.map