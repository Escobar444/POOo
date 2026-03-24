/*Ejercicio 4:
Crear una clase abstracta Electrodomestico con el atributo marca.
1. Definir el método abstracto funcionar().
2. Crear la clase Licuadora (Imprime: "La licuadora [marca] esta moliendo fruta").
3. Crear la clase Microondas (Imprime: "El microondas [marca] esta calentando comida").
4. Instancia: Crear ambos objetos y llamar al método funcionar. */

abstract class Electrodomestico {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    abstract funcionar(): void;
}

class Licuadora extends Electrodomestico {
    funcionar(): void {
        console.log(`La licuadora ${this.marca} esta moliendo fruta`);
    }
}

class Microondas extends Electrodomestico {
    funcionar(): void {
        console.log(`El microondas ${this.marca} esta calentando comida`);
    }
}

// Instancias: Crear ambos objetos y llamar al método funcionar
const licuadora = new Licuadora("LG");
const microondas = new Microondas("Samsung");

licuadora.funcionar();
microondas.funcionar();
