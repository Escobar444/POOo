"use strict";
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
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Figura {
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return 4 * this.lado;
    }
}
class Círculo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}
function preguntarFigura() {
    return new Promise((resolve) => {
        rl.question('¿Qué figura desea calcular? (Cuadrado/Círculo): ', (answer) => {
            resolve(answer);
        });
    });
}
function preguntarLado() {
    return new Promise((resolve) => {
        rl.question('Ingrese el lado del cuadrado: ', (answer) => {
            resolve(parseFloat(answer));
        });
    });
}
function preguntarRadio() {
    return new Promise((resolve) => {
        rl.question('Ingrese el radio del círculo: ', (answer) => {
            resolve(parseFloat(answer));
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const figura = yield preguntarFigura();
        let resultado;
        if (figura.toLowerCase() === 'cuadrado') {
            const lado = yield preguntarLado();
            resultado = new Cuadrado(lado);
        }
        else if (figura.toLowerCase() === 'círculo') {
            const radio = yield preguntarRadio();
            resultado = new Círculo(radio);
        }
        else {
            console.log('Figura no reconocida');
            rl.close();
            return;
        }
        console.log(`Área: ${resultado.calcularArea().toFixed(2)}`);
        console.log(`Perímetro: ${resultado.calcularPerimetro().toFixed(2)}`);
        rl.close();
    });
}
main();
//# sourceMappingURL=TareaEjercicio2.js.map