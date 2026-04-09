class CuentaBancaria {
    private _saldo: number;

    constructor(saldoInicial: number) {
        this._saldo = saldoInicial;
    }

    get saldo(): number {
        return this._saldo;
    }
    set saldo(nuevoSaldo: number) {
        if (nuevoSaldo < 0) {
            throw new Error("El saldo no puede ser negativo.");
        } else {
            this._saldo = nuevoSaldo;
            console.log("saldo actualizado");
            
        }
}
}

const miCuenta = new CuentaBancaria(100);
console.log("tu saldo es: " + miCuenta.saldo);
