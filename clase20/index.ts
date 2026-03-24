 class CuentaBancaria {
    private _saldo: number;
    constructor(saldo: number){
        this._saldo = saldo;
    }
    get saldo(): number {
        return this._saldo;
    }
    set saldo(valor: number){
        if(valor < 0){
            console.log("El saldo no puede ser negativo");
            return;
        }
        this._saldo = valor;
    }
    depositar(monto: number) {
        if(monto > 0) {
            this._saldo += monto;
        }
    }
  
}


const cuenta = new CuentaBancaria(1000);
cuenta.saldo = 5000
cuenta.depositar(500);
console.log(cuenta.saldo);

