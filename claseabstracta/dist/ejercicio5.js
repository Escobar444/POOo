"use strict";
/*Ejercicio 5 Sistema de Pagos
Crear una clase abstracta Pago con el método procesarPago(). El usuario debe poder
seleccionar entre pago en efectivo, pago con tarjeta o transferencia bancaria. Cada clase
debe implementar su proceso de pago. */
Object.defineProperty(exports, "__esModule", { value: true });
class Pago {
    constructor(monto) {
        this.monto = monto;
    }
}
class PagoEfectivo extends Pago {
    procesarPago() {
        console.log('Procesando pago en efectivo por un monto de: ' + this.monto);
    }
}
class PagoTarjeta extends Pago {
    constructor(monto, numeroTarjeta) {
        super(monto);
        this.numeroTarjeta = numeroTarjeta;
    }
    procesarPago() {
        console.log('Procesando pago con tarjeta por un monto de: ' + this.monto + ' con el número de tarjeta: ' + this.numeroTarjeta);
    }
}
class PagoTransferencia extends Pago {
    constructor(monto, numeroCuenta) {
        super(monto);
        this.numeroCuenta = numeroCuenta;
    }
    procesarPago() {
        console.log('Procesando pago por transferencia por un monto de: ' + this.monto + ' con el número de cuenta: ' + this.numeroCuenta);
    }
}
const pagoEfectivo = new PagoEfectivo(100);
pagoEfectivo.procesarPago();
const pagoTarjeta = new PagoTarjeta(200, '1234-5678-9012-3456');
pagoTarjeta.procesarPago();
const pagoTransferencia = new PagoTransferencia(300, '9876543210');
pagoTransferencia.procesarPago();
//# sourceMappingURL=ejercicio5.js.map