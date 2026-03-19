"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Figura {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Rectangulo extends Figura {
    calcularArea() {
        const area = this.base * this.altura;
        console.log(`Área del rectángulo: ${area}`);
    }
    calcularPerimetro() {
        const perimetro = 2 * (this.base + this.altura);
        console.log(`Perímetro del rectángulo: ${perimetro}`);
    }
}
class Cuadrado extends Figura {
    calcularArea() {
        const area = this.base * this.base;
        console.log(`Área del cuadrado: ${area}`);
    }
    calcularPerimetro() {
        const perimetro = 4 * this.base;
        console.log(`Perímetro del cuadrado: ${perimetro}`);
    }
}
class Circulo extends Figura {
    // Para círculo solo usa base como radio (altura no se utiliza)
    constructor(base) {
        super(base, base);
        this.base = base;
    }
    calcularArea() {
        const area = Math.PI * this.base * this.base;
        console.log(`Área del círculo: ${area}`);
    }
    calcularPerimetro() {
        const perimetro = 2 * Math.PI * this.base;
        console.log(`Perímetro del círculo: ${perimetro}`);
    }
}
const rect = new Rectangulo(5, 3);
rect.calcularArea();
rect.calcularPerimetro();
const cuad = new Cuadrado(4, 4);
cuad.calcularArea();
cuad.calcularPerimetro();
const circ = new Circulo(3);
circ.calcularArea();
circ.calcularPerimetro();
//# sourceMappingURL=ejercicio3.js.map