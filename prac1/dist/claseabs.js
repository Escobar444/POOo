"use strict";
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
//# sourceMappingURL=claseabs.js.map