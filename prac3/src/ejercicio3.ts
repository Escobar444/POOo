/*Ejercicio 3:
Crear una clase abstracta Persona con el atributo nombre.
1. Definir el método abstracto saludar().
2. Crear la clase Formal (Imprime: "Mucho gusto, mi nombre es [nombre]").
3. Crear la clase Informal (Imprime: "Que onda, soy [nombre]").
4. Instancia: Crear una persona formal y una informal, y que cada una salude. */

abstract class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract saludar(): void;
}

class Formal extends Persona {
    saludar(): void {
        console.log(`Mucho gusto, mi nombre es ${this.nombre}`);
    }
}

class Informal extends Persona {
    saludar(): void {
        console.log(`Que onda, soy ${this.nombre}`);
    }
}

// Instancias: Crear una persona formal y una informal, y que cada una salude
const personaFormal = new Formal("Carlos");
const personaInformal = new Informal("María");

personaFormal.saludar();
personaInformal.saludar();
