"use strict";
/*Ejercicio1:
Crear una clase llamada Transporte que contenga:
• Un atributo protegido (protected) llamado nombre.
• Un método abstracto llamado calcularCosto(distancia: number) que devuelva un
número.
• Un método concreto llamado mostrarDetalle(distancia: number) que imprima en
consola el nombre del vehículo, la distancia y el total a pagar formateado a dos
decimales.
Clases Hijas: Crear dos implementaciones específicas:
• Taxi: El costo se calcula multiplicando la distancia por $0.50.
• Uber: El costo se calcula multiplicando la distancia por $0.75.
Interacción (Consola): Utilizando la librería readline, el programa debe:
• Preguntar al usuario qué transporte desea utilizar.
• Solicitar la cantidad de kilómetros a recorrer.
• Instanciar el objeto correspondiente y mostrar el detalle del cobro. */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Transporte {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarDetalle(distancia) {
        const costo = this.calcularCosto(distancia);
        console.log(`Transporte: ${this.nombre}`);
        console.log(`Distancia: ${distancia} km`);
        console.log(`Total a pagar: $${costo.toFixed(2)}`);
    }
}
class Taxi extends Transporte {
    constructor() {
        super('Taxi');
    }
    calcularCosto(distancia) {
        return distancia * 0.50;
    }
}
class Uber extends Transporte {
    constructor() {
        super('Uber');
    }
    calcularCosto(distancia) {
        return distancia * 0.75;
    }
}
function preguntarTransporte() {
    return new Promise((resolve) => {
        rl.question('¿Qué transporte desea utilizar? (Taxi/Uber): ', (answer) => {
            resolve(answer);
        });
    });
}
function preguntarDistancia() {
    return new Promise((resolve) => {
        rl.question('¿Cuántos kilómetros desea recorrer?: ', (answer) => {
            resolve(parseFloat(answer));
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const transporte = yield preguntarTransporte();
        const distancia = yield preguntarDistancia();
        let transporteObj = null;
        if (transporte.toLowerCase() === 'taxi') {
            transporteObj = new Taxi();
        }
        else if (transporte.toLowerCase() === 'uber') {
            transporteObj = new Uber();
        }
        else {
            console.log('Transporte no válido.');
            rl.close();
            return;
        }
        transporteObj.mostrarDetalle(distancia);
        rl.close();
    });
}
main();
// ...existing code...
//# sourceMappingURL=ejercicio1.js.map