"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Pago {
    constructor(monto) {
        this.monto = monto;
        if (monto <= 0 || Number.isNaN(monto)) {
            throw new Error("El monto debe ser mayor que cero.");
        }
    }
    mostrarRecibo() {
        console.log("_____________________________________________________");
        console.log("Recibo de Pago");
        console.log("monto procesado: $ " + this.monto.toFixed(2));
        console.log("estado: exitoso");
        console.log("-------------------------------------------------------");
    }
}
class pagoEfectivo extends Pago {
    procesarPago() {
        console.log("Procesando pago en efectivo...");
        console.log("Por favor, entregue el dinero al cajero.");
    }
}
class pagoTarjeta extends Pago {
    constructor(monto, nroTarjeta) {
        super(monto);
        this.nroTarjeta = nroTarjeta;
        if (!/^[0-9]{12,19}$/.test(nroTarjeta)) {
            throw new Error("Número de tarjeta inválido.");
        }
    }
    procesarPago() {
        console.log("Conectando con el banco...");
        console.log("Validando tarjeta terminada en " + this.nroTarjeta.slice(-4));
        console.log("Procesando pago con tarjeta...");
    }
}
function finalizarPago(pago) {
    pago.procesarPago();
    pago.mostrarRecibo();
    rl.close();
}
console.log("--------sistema de cobro universitario-------");
rl.question("Seleccione método de pago (1: efectivo, 2: tarjeta): ", (opcion) => {
    rl.question("Ingrese el monto a pagar: ", (montoinput) => {
        const montoNum = parseFloat(montoinput);
        try {
            if (opcion === "1") {
                const MIpago = new pagoEfectivo(montoNum);
                finalizarPago(MIpago);
            }
            else if (opcion === "2") {
                rl.question("Ingrese el número de tarjeta: ", (nroTarjeta) => {
                    try {
                        const MIpago = new pagoTarjeta(montoNum, nroTarjeta);
                        finalizarPago(MIpago);
                    }
                    catch (err) {
                        console.error(err.message);
                        rl.close();
                    }
                });
            }
            else {
                console.log("Opción no válida.");
                rl.close();
            }
        }
        catch (err) {
            console.error(err.message);
            rl.close();
        }
    });
});
//# sourceMappingURL=ejercicio.js.map