abstract class animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
    comer() {
        console.log(this.nombre + " esta comiendo");
    }
    abstract hacerSonido(): void;

}

class perro extends animal {
    hacerSonido(): void {
        console.log(this.nombre + " dice: Guau!");
    }
}

class gato extends animal {
    hacerSonido(): void {
        console.log(this.nombre + " dice: Miau!");
    }
}

const perroo = new perro("Rex");
perroo.comer();
perroo.hacerSonido();

const gatoo = new gato("Whiskers");
gatoo.comer();
gatoo.hacerSonido();