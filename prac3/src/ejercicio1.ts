/*Ejercicio 1:
Crear una clase abstracta Heroe con el atributo nombre.
1. Definir el método abstracto usarPoder().
2. Crear la clase Volador (Imprime: "Estoy volando por los cielos").
3. Crear la clase Fuerte (Imprime: "Estoy levantando un camion").
4. Instancia: Crear un héroe de cada tipo y llamar a su poder. */

abstract class Heroe {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract usarPoder(): void;
}

class Volador extends Heroe {
    usarPoder(): void {
        console.log("Estoy volando por los cielos");
    }
}

class Fuerte extends Heroe {
    usarPoder(): void {
        console.log("Estoy levantando un camion");
    }
}

// Instancias: Crear un héroe de cada tipo y llamar a su poder
const heroeVolador = new Volador("Superman");
const heroeFuerte = new Fuerte("Hulk");

heroeVolador.usarPoder();
heroeFuerte.usarPoder();