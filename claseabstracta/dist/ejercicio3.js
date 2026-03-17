"use strict";
/*Ejercicio 3 Sistema de Figuras Geométricas
Crear una clase abstracta Figura con los métodos calcularArea() y calcularPerimetro(). El
usuario debe elegir entre Cuadrado, Rectángulo o Círculo e ingresar los valores necesarios
para calcular los resultados.*/
Object.defineProperty(exports, "__esModule", { value: true });
class figura {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class rectangulo extends figura {
    constructor(base, altura) {
        super(base, altura);
    }
    area() {
        const area = parseFloat(this.base) * parseFloat(this.altura);
        console.log('el área del rectángulo es: ' + area);
    }
    perimetro() {
        const perimetro = 2 * (parseFloat(this.base) + parseFloat(this.altura));
        console.log('el perímetro del rectángulo es: ' + perimetro);
    }
}
class circulo extends figura {
    constructor(base) {
        super(base, '0');
    }
    area() {
        const area = Math.PI * Math.pow(parseFloat(this.base), 2);
        console.log('el área del círculo es: ' + area);
    }
    perimetro() {
        const perimetro = 2 * Math.PI * parseFloat(this.base);
        console.log('el perímetro del círculo es: ' + perimetro);
    }
}
class cuadrado extends figura {
    area() {
        const area = parseFloat(this.base) * parseFloat(this.base);
        console.log('el área del cuadrado es: ' + area);
    }
    perimetro() {
        const perimetro = 4 * parseFloat(this.base);
        console.log('el perímetro del cuadrado es: ' + perimetro);
    }
}
const rectangulito = new rectangulo('5', '3');
rectangulito.area();
rectangulito.perimetro();
const circulito = new circulo('3');
circulito.area();
circulito.perimetro();
const cuadradito = new cuadrado('4', '4');
cuadradito.area();
cuadradito.perimetro();
//# sourceMappingURL=ejercicio3.js.map