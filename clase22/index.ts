import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class persona {
    protected sueldo: number = 0;

    abstract evaluarCredito(): void;


class Cliente extends persona {

    pedirSueldo(): void {
        rl.question("\ningrese su sueldo:", (dato)=> {
            this.sueldo = parseFloat(dato);
            this.evaluarCredito();
            rl.close();
        });
    }
}

evaluarCredito(): void {
    console.log(`\nsueldo ingresado: $${this.sueldo}`);
    
    if (this.sueldo > 1300) {
        console.log("tarjeta aprobada por 2500");
    } else if  (this.sueldo > 800){
        console.log("tarjeta aprobada por $700");
    } else {
        console.log("no aplica para tarjeta de credito");
    
    }
}

}