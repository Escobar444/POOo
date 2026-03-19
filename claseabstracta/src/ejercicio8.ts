/*Ejercicio 8 Sistema de Tienda (Nivel Avanzado)
Crear una clase abstracta Producto con los métodos calcularPrecioFinal() y
mostrarInformacion(). El sistema debe permitir registrar productos electrónicos, ropa y
alimentos. Cada tipo de producto debe aplicar diferentes reglas de impuestos o descuentos
para calcular el precio final.
 */
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Producto {
    constructor(protected nombre: string, protected precioBase: number) {
        if (precioBase <= 0 || Number.isNaN(precioBase)) {
            throw new Error("El precio base debe ser mayor que cero.");
        }
    }
    abstract calcularPrecioFinal(): number;

    public mostrarInformacion(): void {
        console.log("Producto: " + this.nombre);
        console.log("Precio Base: $ " + this.precioBase.toFixed(2));
        console.log("Precio Final: $ " + this.calcularPrecioFinal().toFixed(2));
    }
}

class ProductoElectronico extends Producto {
    calcularPrecioFinal(): number {
        const impuesto = 0.15 * this.precioBase;
        return this.precioBase + impuesto;
    }
}

class Ropa extends Producto {
    calcularPrecioFinal(): number {
        const descuento = 0.10 * this.precioBase;
        return this.precioBase - descuento;
    }
}

class Alimento extends Producto {
    calcularPrecioFinal(): number {
        const impuesto = 0.05 * this.precioBase;
        return this.precioBase + impuesto;
    }
}

console.log("--------Sistema de Tienda-------");

rl.question("Seleccione el tipo de producto (1: Electrónico, 2: Ropa, 3: Alimento): ", (opcion: string) => {
    rl.question("Ingrese el nombre del producto: ", (nombre: string) => {
        rl.question("Ingrese el precio base del producto: ", (precioInput: string) => {
            const precioNum = parseFloat(precioInput);
            try {
                let producto: Producto;
                if (opcion === "1") {
                    producto = new ProductoElectronico(nombre, precioNum);
                } else if (opcion === "2") {
                    producto = new Ropa(nombre, precioNum);
                } else if (opcion === "3") {
                    producto = new Alimento(nombre, precioNum);
                } else {
                    console.log("Opción no válida.");
                    rl.close();
                    return;
                }
                producto.mostrarInformacion();
            } catch (error) {
                if (error instanceof Error) {
                    console.error("Error:", error.message);
                } else {
                    console.error("Error desconocido");
                }
            }
            rl.close();
        });
    });
});