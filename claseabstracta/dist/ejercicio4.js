"use strict";
/*Ejercicio 4 Sistema de Empleados
Crear una clase abstracta Empleado con el método calcularSalario(). El sistema debe
permitir registrar empleados por horas, empleados fijos y empleados por comisión. Cada
tipo de empleado debe implementar su propio cálculo de salario. */
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class EmpleadoPorHoras extends Empleado {
    constructor(nombre, horasTrabajadas, tarifaPorHora) {
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }
    calcularSalario() {
        const salario = this.horasTrabajadas * this.tarifaPorHora;
        console.log('El salario del empleado por horas ' + this.nombre + ' es: ' + salario);
    }
}
class EmpleadoFijo extends Empleado {
    constructor(nombre, salarioMensual) {
        super(nombre);
        this.salarioMensual = salarioMensual;
    }
    calcularSalario() {
        console.log('El salario del empleado fijo ' + this.nombre + ' es: ' + this.salarioMensual);
    }
}
class EmpleadoPorComision extends Empleado {
    constructor(nombre, ventasTotales, porcentajeComision) {
        super(nombre);
        this.ventasTotales = ventasTotales;
        this.porcentajeComision = porcentajeComision;
    }
    calcularSalario() {
        const salario = this.ventasTotales * (this.porcentajeComision / 100);
        console.log('El salario del empleado por comisión ' + this.nombre + ' es: ' + salario);
    }
}
const empleadoHoras = new EmpleadoPorHoras('Juan', 160, 15);
empleadoHoras.calcularSalario();
const empleadoFijo = new EmpleadoFijo('María', 3000);
empleadoFijo.calcularSalario();
const empleadoComision = new EmpleadoPorComision('Carlos', 50000, 10);
empleadoComision.calcularSalario();
//# sourceMappingURL=ejercicio4.js.map