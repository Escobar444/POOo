"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class POO {
    constructor(codigo, nombre, edad, laboratorio, parciales) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.edad = edad;
        this.laboratorio = laboratorio;
        this.parciales = parciales;
    }
    mostrarDatos() {
        console.log('el estudiante:' + this.nombre);
        console.log('con codigo:' + this.codigo);
        console.log('de edad:' + this.edad);
        console.log('tiene un promedio de laboratorio de:' + this.laboratorio);
        console.log('y un promedio de parciales de:' + this.parciales);
    }
    mostrarNotas() {
        console.log('lab:' + this.laboratorio + 'parcial:' + this.parciales);
    }
}
class redes {
    constructor(nombre, lab1, lab2, lab3, parcial1, parcial2, parcial3) {
        this.nombre = nombre;
        this.lab1 = lab1;
        this.lab2 = lab2;
        this.lab3 = lab3;
        this.parcial1 = parcial1;
        this.parcial2 = parcial2;
        this.parcial3 = parcial3;
    }
    mostrarNotass() {
        console.log('el estudiante:' + this.nombre);
        let promedio_lab = (this.lab1 + this.lab2 + this.lab3) * 0.6 / 3;
        let promedio_parcial = (this.parcial1 + this.parcial2 + this.parcial3) * 0.4 / 3;
        let promedio_final = promedio_lab + promedio_parcial;
        console.log('tiene un promedio de laboratorio de:' + promedio_lab);
        console.log('y un promedio de parciales de:' + promedio_parcial);
        console.log('su promedio final es de:' + promedio_final);
    }
}
//objetos instanciados a POO
//let estudiante1 = new POO("u20250234", "Isaac", 22, 0, 0);
//estudiante1.mostrarDatos();
//estudiante1.mostrarNotas();
//objetos instanciados a redes
let estudiante2 = new redes('pedro', 9, 8, 9, 7, 9, 6);
estudiante2.mostrarNotass();
//# sourceMappingURL=index.js.map