import { log } from 'console';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Tarjeta {
    protected saldo: number;
    protected puntos: number = 0;

    constructor(saldoInicial: number){
        this.saldo = saldoInicial;
    }

abstract inciar(): void;
}
///


//
class TarjetaCredito extends Tarjeta {
    constructor(){
        super(3000);
    }

    inciar(): void {
        console.log(`\nSaldo inicial: $${this.saldo}`);
        this.ProcesarTransaccion();
        console.log(`\npuntos iniciales: $${this.puntos}`);
        this.ProcesarPuntos();
        
        
        // Implementación específica para tarjeta de crédito
    }
private ProcesarTransaccion(): void {
    if (this.saldo <= 0){
        console.log("\nsaldo agotado. cuenta cerrada");
        rl.close();
        return        
    }
}

private ProcesarPuntos(): void {
    const agricola = 5
    const bac = 3

if (this.puntos === agricola || this.puntos === bac){
    console.log("\npuntos acumulados: " + this.puntos);
}
if (this.puntos === agricola){
    const puntosAgricola = this.puntos * 2
    console.log("puntos asignados");
    console.log("puntos totales: " + puntosAgricola);
}
if (this.puntos === bac){
    const puntosBac = this.puntos * 3
    console.log("puntos asignados");
    console.log("puntos totales: " + puntosBac);
}






    rl.question("\nDigite el monto de la transaccion (0 para salir): ", (dato) => {
        const monto = parseFloat(dato);
        if (isNaN(monto) || monto < 0) {
            console.log("ingrese un monto valido");
            return this.ProcesarTransaccion();   
        }
        if (monto === 0 ){
            console.log("operacion finalizada");
            rl.close();
            return;
        }
        if (monto > this.saldo) {
            console.log("fondos insuficientes");
        } else {
            this.saldo -= monto;
            console.log(`transaccion exitosa. saldo restante: $${this.saldo}`);
        }
        this.ProcesarTransaccion();
    })


}}


  


const tarjeta = new TarjetaCredito();
tarjeta.inciar();