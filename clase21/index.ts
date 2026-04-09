class Banco {
    cliente: string;
    private saldo: number;
    constructor(cliente: string, saldo: number){
    this.cliente = cliente;
    this.saldo=saldo
}
get Nuevosaldo():number{
    return this.saldo
}
set Nuevosaldo (valor: number){
    if(valor>=0)
        this.saldo= valor
    this.saldo = valor;
}
mostrar():void{
    console.log("saldo: " + this.saldo)
}
}

//let objeto=  new Banco("porfirio", 100)
//objeto.cliente="juan"
//objeto.Nuevosaldo=200
//objeto.mostrar()

class movimientos extends Banco {
    deposito: number
    constructor(nombre: string, saldo:number, deposito:number){
    super(nombre,saldo)
    this.deposito= deposito
    }
    procesoDeposito():void{
        let nuevomonto = this.Nuevosaldo + this.deposito;
        console.log("el nuevo saldo es:$ " +  nuevomonto);
        this.comision(nuevomonto); 
    }
    comision(nuevomonto:number){
        let salida = nuevomonto -1;
        console.log("te cobre por la transfer nuevo saldo$ " +salida);
        
    }
}

let dep=25
let proceso =new movimientos("porfirio", 100, dep)
proceso.Nuevosaldo=800
proceso.procesoDeposito();
