class laptop {
    marca: string;
    modelo: string;
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("isaac");
person.name = "jane"
console.log(person.name);

///


interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}

const rect = new Rectangle(6,12)
const sqr = new Square(6)
console.log(rect.getArea(), sqr.getArea());


////
//suo de clases abstractas, metodos: paypal y tarjeta
//clase abstacta
abstract class MetodoPago {
    protected tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }
    abstract validar(): boolean;
abstract procesar(monto: number): number | string;

confirmarPago(monto: number):string | number {
 if (!this.validar()){
    return "pago rechazado, por validación fallida"
 }
 return this.procesar(monto);
}
}
class tarjetaCredito extends MetodoPago {
    private numeroTarjeta: string;
    private CVV: string;

    constructor(numeroTarjeta: string, CVV: string) {
        super("tarjeta de credito");
        this.numeroTarjeta = numeroTarjeta;
        this.CVV = CVV;
    }
    validar(): boolean {
        return this.numeroTarjeta.length === 16 && this.CVV.length === 3;
    }
    procesar(monto: number): string{
        return `pago procesado  de ${monto} de la tarjeta ${this.numeroTarjeta.slice(-4)}`
    }
}

//clase paypal

class PayPal extends MetodoPago {
    private email: string;
constructor(email: string) {
    super("paypal");
    this.email = email;
}
//validar que el email incluya un (@, .) 
override validar(): boolean {
    return this.email.includes("@") && this.email.includes(".");
}
override procesar(monto: number): number | string {
    return `pago procesado de ${monto} a la cuenta de paypal ${this.email}`;
}





}

const pago1 = new tarjetaCredito("1234567890123456", "123");
const pago2 = new PayPal("user@example.com");
console.log(pago1.confirmarPago(100));
console.log(pago2.confirmarPago(200));
console.log();


import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("ingrese el monto a pagar:", (monto: string | 
) => {
    rl.question("seleccione el metodo de pago (1 tarjeta, 2 paypal):", (opcion) => {
        let pago: MetodoPago;
        if (opcion === "1") {
            pago = new tarjetaCredito("1234567890123456", "123");
        } else if (opcion === "2") {
            pago = new PayPal("user@example.com");
        } else {
            console.log("opcion invalida");
            rl.close();
            return;
        }

        
    })
    
})
pago1.confirmarPago(parseFloat(monto));
rl.close();


