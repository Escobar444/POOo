"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class aniales {
    constructor(nombre, categoria, raza) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }
    mostar() {
        console.log('el animal es un ' + this.categoria + ' su nombre es ' + this.nombre);
    }
}
class Encargado extends aniales {
    constructor(nombre, categoria, raza, dueño) {
        super(nombre, categoria, raza);
        this.dueño = dueño;
    }
    mensaje() {
        console.log('el animalito que es un: ' + this.categoria);
        console.log('su nombre es: ' + this.nombre + ' y su dueño es: ' + this.dueño);
    }
}
class venta extends Encargado {
    constructor(nombre, categoria, raza, dueño, precio) {
        super(nombre, categoria, raza, dueño);
        this.precio = precio;
    }
    msjVenta() {
        console.log('se vende un: ' + this.categoria + ' su nombre es: ' + this.nombre + ' y su precio es: ' + this.precio);
    }
}
const ob = new venta('killer', 'perro', 'pitbull', 'miguel', 1000);
ob.mostar();
ob.mensaje();
ob.msjVenta();
//# sourceMappingURL=index.js.map