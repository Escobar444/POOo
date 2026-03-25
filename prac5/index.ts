import { log } from "node:console";

/*Ejercicio 1: Calculadora de Descuentos
El reto: Crear un sistema que aplique rebajas dependiendo del tipo de producto.
1. La base: Clase abstracta Producto con el método aplicarDescuento(precio).
2. Las opciones: * Ropa: Aplica un 20% de descuento.
o Electronica: Aplica un 10% de descuento.
3. Funcionamiento: Pedir el precio al usuario, elegir la categoría y mostrar cuánto
debe pagar al final. */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//1. clase padre

abstract class producto {
    constructor(protected nombre: string){}
    //obligatorio: cada producto decide cuanto descuento aplica
    abstract aplicarDescuento(precio: number): number;
    public mostrarPrecioFinal(precioBase: number): void{
        const final = this.aplicarDescuento(precioBase);
        console.log("------------------------------");
        console.log("producto " + this.nombre);
        console.log("precio orginal " + precioBase);
        console.log("precio con descuento " + final.toFixed(2));
    }
}

//2. clases hijas

class Ropa extends producto{
    aplicarDescuento(precio: number): number {
        return precio * 0.80;
    }
}

class electronica extends producto{
     aplicarDescuento(precio: number): number {
       return precio * 0.90 
    }
}

//interaccion

console.log("==sistema de caja registradora==");

rl.question("tipo de producto (1: ropa, 2: electronica):",(opcion: string)=>{
    rl.question("ingrese el precio de etiqueta:",(entrada: string)=>{
        const precio = parseFloat(entrada);
        let prod: producto
        if (opcion === "1") {
            prod = new Ropa("camiseta de algodon");
        } else {
            prod = new electronica("lapto gaming");
        }
        prod.mostrarPrecioFinal(precio);
        rl.close();
    })
})
