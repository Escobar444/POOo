import { log } from "node:console";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Registro {
    private _nombreMateria: string;
    private _nota: number = 0

    constructor(materia: string){
        this._nombreMateria = materia;
    }
    get nombreMateria(): string {
        return this._nombreMateria;
    }
    get nota(): number {
        return this._nota;
    }
    set nota(valor: number) {
        if (valor >= 0 && valor <= 10){
            this._nota = valor;
        } else {
            console.log("----ERROR: La calificación debe estar entre 0.0 y 10.0 ---");
            
        }
    }
    get estado(): string {
        return this._nota >= 6 ? "Aprobado" : "Reprobado";
    }
}
const registro = new Registro("Progeamación Orientada a Objetos");
console.log("=== sistema de gestion academica ===");

rl.question(`ingresa la nota para ${registro.nombreMateria}:`, (entrada: string) =>{
    const n = parseFloat(entrada);
    registro.nota = n;

    console.log("\n --------------------------");
    console.log(`Materia: ${registro.nombreMateria}`);
    console.log(`Nota: ${registro.nota}`);
    console.log(`resultado: ${registro.estado}`);
    console.log(" --------------------------");
    rl.close();
    
})