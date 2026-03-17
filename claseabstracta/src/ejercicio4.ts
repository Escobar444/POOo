/*Ejercicio 4 Sistema de Empleados
Crear una clase abstracta Empleado con el método calcularSalario(). El sistema debe
permitir registrar empleados por horas, empleados fijos y empleados por comisión. Cada
tipo de empleado debe implementar su propio cálculo de salario. */

abstract class Empleado {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    abstract calcularSalario(): void;

}

class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    tarifaPorHora: number;
    constructor(nombre: string, horasTrabajadas: number, tarifaPorHora: number) {
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }
    calcularSalario(): void {
        const salario = this.horasTrabajadas * this.tarifaPorHora;
        console.log('El salario del empleado por horas ' + this.nombre + ' es: ' + salario);
    }
}
class EmpleadoFijo extends Empleado {
    salarioMensual: number;
    constructor(nombre: string, salarioMensual: number) {
        super(nombre);
        this.salarioMensual = salarioMensual;
    }
    calcularSalario(): void {
        console.log('El salario del empleado fijo ' + this.nombre + ' es: ' + this.salarioMensual);
    }
}

class EmpleadoPorComision extends Empleado {
    ventasTotales: number;
    porcentajeComision: number;
    constructor(nombre: string, ventasTotales: number, porcentajeComision: number) {
        super(nombre);
        this.ventasTotales = ventasTotales;
        this.porcentajeComision = porcentajeComision;
    }
    calcularSalario(): void {
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

