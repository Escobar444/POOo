import { log } from "node:console";

const redline = require('readline');

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
})

abstract class ejercicio {
    abstract calcularCalorias(minutos: number): number;
}

class correr extends ejercicio {
    override calcularCalorias(minutos: number): number {
        return minutos * 10;
    }
}

class yoga extends ejercicio {
    override calcularCalorias(minutos: number): number {
        return minutos * 4
    }
}

//interaccion

console.log("-----monitor de actividad fisia----");
rl.question("¿que ejercicio hizo? (1: correr, 2: yoga):", (opcion: string)=>{
    rl.question("¿cuantos minutos entreno?:", (tiempo: string)=>{
        const minutos = parseInt(tiempo);
        let entrenamiento: ejercicio;
        if (opcion === "1") {
            entrenamiento = new correr();
            console.log("¡Gran esfuerzo cardiovascular!");
        } else {
            entrenamiento = new yoga();
            console.log("Exelente para la flexivilidad y mente.");
            
        }
        const quemadas = entrenamiento.calcularCalorias(minutos);
        console.log("total de calorias quemdas:  " + quemadas  + "kcal");
        rl.close();
        
    })
})
