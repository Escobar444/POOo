/*Ejercicio 2:
Crear una clase abstracta MaquinaBebida.
1. Definir el método abstracto servir().
2. Crear la clase Cafetera (Imprime: "Sirviendo un café caliente").
3. Crear la clase DispensadorSoda (Imprime: "Sirviendo soda con hielo").
4. Instancia: Crear una cafetera y un dispensador, y llamar al método servir. */

abstract class MaquinaBebida {
    abstract servir(): void;
}

class Cafetera extends MaquinaBebida {
    servir(): void {
        console.log("Sirviendo un café caliente");
    }
}

class DispensadorSoda extends MaquinaBebida {
    servir(): void {
        console.log("Sirviendo soda con hielo");
    }
}

// Instancias: Crear una cafetera y un dispensador, y llamar al método servir
const cafetera = new Cafetera();
const dispensadorSoda = new DispensadorSoda();

cafetera.servir();
dispensadorSoda.servir();
