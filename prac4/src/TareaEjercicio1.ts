import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Transporte {
    protected nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    abstract calcularCosto(distancia: number): number;  
    mostrarDetalle(distancia: number): void {
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
    calcularCosto(distancia: number): number {
        return distancia * 0.50;
    }
}

class Uber extends Transporte {
    constructor() {
        super('Uber');
    }
    calcularCosto(distancia: number): number {
        return distancia * 0.75;
    }
}

function preguntarTransporte(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('¿Qué transporte desea utilizar? (Taxi/Uber): ', (answer) => {
            resolve(answer);
        });
    });
}

function preguntarDistancia(): Promise<number> {
    return new Promise((resolve) => {
        rl.question('¿Cuántos kilómetros desea recorrer?: ', (answer) => {
            resolve(parseFloat(answer));
        });
    });
}
async function main() {
    const transporte = await preguntarTransporte();
    const distancia = await preguntarDistancia();
    let transporteObj: Transporte | null = null;
    if (transporte.toLowerCase() === 'taxi') {
        transporteObj = new Taxi();
    } else if (transporte.toLowerCase() === 'uber') {
        transporteObj = new Uber();
    } else {
        console.log('Transporte no válido.');
        rl.close();
        return;
    }
    transporteObj.mostrarDetalle(distancia);
    rl.close();
}
main();

