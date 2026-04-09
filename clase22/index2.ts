import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class SistemaColores {
    protected colores: string[] = [];

    abstract PedirColores(): void;
    abstract MezclarColores(): void;
}

class JuegoColores extends SistemaColores {
    private combinaciones: { [key: string]: string} = {
        "rojo-azul": "morado",
        "azul-amarillo": "verde",
        "rojo-amarillo": "naranja",
        "negro-blanco": "gris"
    };
    PedirColores(): void {
        this.colores = [];

        const pedir = (i: number) => {
            if (i < 2 ){
                rl.question(`ingrese el color ${i + 1}:`, {color} => {
                    this.colores.push(color.toLowerCase());
                    pedir(i + 1);
                });
            } else {
                this.MezclarColores();
                rl.close();
            }
        };
        pedir(0);
    }