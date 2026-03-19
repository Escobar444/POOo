"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Pago {
    construcutor(monto) {
        if (monto <= 0) {
            throw new Error("El monto debe ser mayor que cero.");
        }
    }
    mostrarRecibo() {
        console.log("_____________________________________________________");
        console.log("Recibo de Pago");
        console.log("monto procesado: $ " + this.monto);
        console.log("estado: exitoso");
        console.log("-------------------------------------------------------");
    }
}
class pagoEfectivo extends Pago {
    procesarPago() {
        console.log("Procesando pago en efectivo...");
        console.log("por favor, entregue el dinero al cajero");
    }
    procesarPago() {
        console.log("conectando con el banco");
        console.log("validando tarjeta terminada en.  " + this.nroTarjtea.slice(-4));
        console.log("procesando pago con tarjeta...");
    }
}
console.log("--------sistema de cobro universitario-------");
rl.question("seleccione metodo de pago (1: efectivo, 2: tarjeta) ", (opción) => {
    rl.question("ingrese el monto a pagar", (montoinput) => {
        const montoNum = parseFloat(montoinput);
        let MIpago;
        if (opción === "1") {
            MIpago = new pagoEfectivo(montoNum);
            finalizarPago(MIpago);
        }
        else if (opción === "2") {
            rl.question("ingrese el numero de tarjeta", (nroTarjeta) => {
                MIpago = new pagoTarjeta(montoNum, nroTarjeta);
                finalizarPago(MIpago);
            });
        }
        else {
            console.log("opción no válida");
            rl.close();
        }
    });
});
//# sourceMappingURL=ejercicio.js.map