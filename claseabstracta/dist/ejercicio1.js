"use strict";
/*Ejercicio 1 Sistema de Animales
Crear una clase abstracta llamada Animal con un método abstracto hacerSonido(). El
programa debe pedir al usuario qué animal desea crear (Perro, Gato o Vaca) utilizando
readline. Cada clase hija debe implementar el método hacerSonido mostrando el sonido
correspondiente (sin pedir al usuario)*/
Object.defineProperty(exports, "__esModule", { value: true });
class animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        console.log(this.nombre + " esta comiendo");
    }
}
class perro extends animal {
    hacerSonido() {
        console.log(this.nombre + " dice: Guau!");
    }
}
class gato extends animal {
    hacerSonido() {
        console.log(this.nombre + " dice: Miau!");
    }
}
const perroo = new perro("Rex");
perroo.comer();
perroo.hacerSonido();
const gatoo = new gato("Whiskers");
gatoo.comer();
gatoo.hacerSonido();
///
//# sourceMappingURL=ejercicio1.js.map