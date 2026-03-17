"use strict";
/*Ejercicio 2 Sistema de Vehículos
Crear una clase abstracta Vehiculo con el método abstracto mover(). El sistema debe
permitir al usuario seleccionar entre Carro, Bicicleta o Motocicleta y cada clase debe
implementar su forma de movimiento. */
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class carro extends Vehiculo {
    mover() {
        console.log('el carro avanza a 40km/h');
    }
}
class moto extends Vehiculo {
    mover() {
        console.log('la moto avanza a 20km/h');
    }
}
const carrito = new carro('honda');
carrito.mover();
const motito = new moto('yamaha');
motito.mover();
//# sourceMappingURL=ejercicio2.js.map