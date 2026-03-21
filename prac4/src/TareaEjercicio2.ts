/*Ejercicio 2:
Crear una herramienta que calcule automáticamente el área y el perímetro de diferentes
figuras.
1. Crea la base: Una clase abstracta Figura con los métodos abstractos calcularArea()
y calcularPerimetro().
2. Crea las opciones:
o Cuadrado: Pide el lado.
o Círculo: Pide el radio.
3. Usa Readline: Pregunta al usuario qué figura desea y solicita los datos necesarios
(lado o radio).
4. Muestra el resultado: Imprime el área y el perímetro con solo 2 decimales usando
toFixed(2) */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

class Cuadrado extends Figura {
    constructor(public lado: number) {
        super();
    }
    calcularArea(): number {
        return this.lado * this.lado;
    }
    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

class Círculo extends Figura {
    constructor(public radio: number) {
        super();
    }
    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}
function preguntarFigura(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('¿Qué figura desea calcular? (Cuadrado/Círculo): ', (answer: string) => {
            resolve(answer);
        });
    });
}
function preguntarLado(): Promise<number> {
    return new Promise((resolve) => {
        rl.question('Ingrese el lado del cuadrado: ', (answer: string) => {
            resolve(parseFloat(answer));
        });
    });
}
function preguntarRadio(): Promise<number> {
    return new Promise((resolve) => {
        rl.question('Ingrese el radio del círculo: ', (answer: string) => {
            resolve(parseFloat(answer));
        });
    });
}
async function main() {
    const figura = await preguntarFigura();
    let resultado: Figura;
    if (figura.toLowerCase() === 'cuadrado') {
        const lado = await preguntarLado();
        resultado = new Cuadrado(lado);
    } else if (figura.toLowerCase() === 'círculo') {
        const radio = await preguntarRadio();
        resultado = new Círculo(radio);
    } else {
        console.log('Figura no reconocida');
        rl.close();
        return;
    }
    
    console.log(`Área: ${resultado.calcularArea().toFixed(2)}`);
    console.log(`Perímetro: ${resultado.calcularPerimetro().toFixed(2)}`);
    rl.close();
}
main();

