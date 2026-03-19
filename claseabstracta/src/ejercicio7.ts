/*Ejercicio 7 Sistema de Transporte
Crear una clase abstracta Transporte con el método calcularCosto(). El usuario
seleccionará entre Taxi, Autobús o Uber e ingresará la distancia recorrida para calcular el
costo del viaje. */
import { log } from 'console';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Transporte {
    constructor(protected distancia: number) {
        if (distancia <= 0 || Number.isNaN(distancia)) {
            throw new Error("La distancia debe ser mayor que cero.");
        }
    }
    abstract calcularCosto(): number;
}

class Taxi extends Transporte {
    calcularCosto(): number {
        const costoBase = 5 * this.distancia;
        console.log("el costo del viaje es: ", costoBase);
        return costoBase;
    }
}

class Autobus extends Transporte {
    calcularCosto(): number {
        const costoBase = 2 * this.distancia;
        console.log("el costo del viaje es: ", costoBase);
        return costoBase;
    }
}

class Uber extends Transporte {
    calcularCosto(): number {
        const costoBase = 3 * this.distancia;
        console.log("el costo del viaje es: ", costoBase);
        return costoBase;
    }
}

console.log("--------Sistema de Transporte-------");

rl.question("Seleccione el tipo de transporte (1: Taxi, 2: Autobús, 3: Uber): ", (opcion: string) => {
    rl.question("Ingrese la distancia recorrida en kilómetros: ", (distanciaInput: string) => {
        const distanciaNum = parseFloat(distanciaInput);
        try {
            let transporte: Transporte;
            if (opcion === "1") {
                transporte = new Taxi(distanciaNum);
            } else if (opcion === "2") {
                transporte = new Autobus(distanciaNum);
            } else if (opcion === "3") {
                transporte = new Uber(distanciaNum);
            } else {
                throw new Error("Opción de transporte inválida.");
            }
            transporte.calcularCosto();
        } catch (error) {
            const mensaje = error instanceof Error ? error.message : String(error);
            console.error("Error: " + mensaje);
        }
        rl.close();
    });
});
