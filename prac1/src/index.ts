/*Crear una clase "Player" con nombre y vida. El constructor debe inicializar ambos atributos. Añadiremos un método por ejemplo: recibir daño (puntos) que reste la vida y un método status() que diga si el guerrero sigue en pie o si ha sido derrotado.  */

class player {
    name: string;
    vida: number;

    constructor(name: string, vida: number) {
        this.name = name;
        this.vida = vida;
    }
    RecibirDaño(puntos: number): void{
        this.vida -= puntos;
        console.log(`${this.name} recibio ${puntos} de daño. vida restante: ${this.vida}`);
        
    }
    status(): void {
        if (this.vida > 0) {
            console.log(`${this.name} sigue en pie.`);
        } else {
            console.log(`${this.name} ha sido derrotado.`);
        }

    
}
}
let player1 = new player("Juan", 100);
player1.RecibirDaño(30);
player1.status();
player1.RecibirDaño(80);
player1.status();


///

/* Crear una clase "Orden Cafe". La clase debe tener los atributos: tipocafe, cantidad y precio. Un método para calcular el total a pagar, el cual debe retornar la multiplicación de cantidad por el precio. */

class OrdenCafe {
    tipoCafe: string;
    cantidad: number;
    precio: number;
    constructor(tipoCafe: string, cantidad: number, precio: number){
        this.tipoCafe = tipoCafe;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    calcularTotal(): number {
        return this.cantidad * this.precio;
    }
}
let orden1 = new OrdenCafe("Espresso", 2, 3);
console.log(`El total a pagar por la orden de ${orden1.tipoCafe} es: $${orden1.calcularTotal()}`);

//

/* Crear una clase "Mascota" con atributos de: nombre y hambre (0 a 100). Un método comer() que baje el hambre en 20 puntos y un método correr() que la suba en 10. */

class Mascota{
    nombre: string;
    hambre: number = 50;

    constructor(nombre: string){
        this.nombre = nombre;
    }
    comer() {
        this.hambre -= 20;
        console.log(`${this.nombre} comió y su hambre disminuyó a ${this.hambre}.`);
    }
    correr() {
        this.hambre += 10;
        console.log(`${this.nombre} corrió y su hambre aumentó a ${this.hambre}.`);
    }
}
const mascota1 = new Mascota("Fido");
mascota1.comer();
mascota1.correr();
///

/*Crear una clase "Alarma" con atributos de: codigo de acceso (string) y estado. Un método desactivar, ejemplo (Intento Codigo) este debe comparar si el código ingresado es igual al original. Si es correcto, cambia el estado a False; si no, debe lanzar una advertencia. */

class Alarma {
    private codigoAcceso: string;
    estado: boolean = true;
    constructor(codigo: string) {
        this.codigoAcceso = codigo;
    }
    desactivar(Intento: string): void {
        if(Intento === this.codigoAcceso){
            this.estado = false;
            console.log("Alarma desactivada.");
        } else {
            console.warn("Código incorrecto. La alarma sigue activada.");
        }
    }
}
let alarma1 = new Alarma("1234");
alarma1.desactivar("1234");

/*Crear una clase "Tanque Combustible" con atributos de: capacidad Maxima y nivel Actual. Crearemos un método llamado agregar combustible, que no permita exceder el límite máximo, y un método consumir que verifique si hay suficiente antes de restar. */

class TanqueCombustible {
    capacidadMaxima: number = 100;
    nivelActual: number;
    constructor(nivelActual: number) {
        this.nivelActual = nivelActual;
    }
    agregarCombustible(cantidad: number): void {
        if (this.nivelActual + cantidad > this.capacidadMaxima) {
            console.warn("No se puede agregar combustible. Excede la capacidad máxima.");
        } else {            this.nivelActual += cantidad;
            console.log(`Combustible agregado. Nivel actual: ${this.nivelActual}`);
        }
    }
    consumir(cantidad: number): void {
        if (this.nivelActual >= cantidad) {
            this.nivelActual -= cantidad;
            console.log(`Combustible consumido. Nivel actual: ${this.nivelActual}`);
        } else {
            console.warn("No hay suficiente combustible para consumir.");
        }
    }
}
let tanque1 = new TanqueCombustible(50);
tanque1.agregarCombustible(30);
tanque1.consumir(60);

//tarea//

/*Crear una clase Empleado con los atributos nombre, salario Base y horas Extras. El
constructor debe inicializar estos valores. Crear un método para calcular el Salario Total
que retorne el salario base más el pago de las horas extras*/

class Empleado {
    nombre: string;
    salarioBase: number;
    horasExtras: number;
    constructor(nombre: string, salarioBase: number, horasExtras: number) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasExtras = horasExtras;
    }
    calcularSalarioTotal(): number {
        const pagoHorasExtras = this.horasExtras * 20;
        return this.salarioBase + pagoHorasExtras;
    }
}
let empleado1 = new Empleado("Maria", 1000, 10);
console.log(`El salario total de ${empleado1.nombre} es: $${empleado1.calcularSalarioTotal()}`);

/*Crear una clase Cuenta Bancaria con titular y saldo (inicia en 0). Debe tener métodos
para depositar, retirar, validando que tenga saldo suficiente y consultar Saldo. */

class CuentaBancaria {
    titular: string;
    saldo: number = 0
    constructor(titular: string) {
        this.titular = titular;
    }
    depositar(cantidad: number): void {
        this.saldo += cantidad;
        console.log(`Depósito realizado. Saldo actual: $${this.saldo}`);
    }
    retirar(cantidad: number): void {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
            console.log(`Retiro realizado. Saldo actual: $${this.saldo}`);
        } else {
            console.warn("Saldo insuficiente para realizar el retiro.");
        }
    }
    consultarSaldo(): void {
        console.log(`El saldo actual de ${this.titular} es: $${this.saldo}`);
    }
}
let cuenta1 = new CuentaBancaria("Carlos");
cuenta1.depositar(500);
cuenta1.retirar(200);
cuenta1.consultarSaldo();

/*Crear una clase Vehículo con marca, modelo y año. Implementar un método mostrar
información que imprima los datos. Instanciar dos vehículos diferentes*/

class Vehiculo {
    marca: string;
    modelo: string;
    año: number
    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarInformacion(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}
let vehiculo1 = new Vehiculo("Toyota", "Corolla", 2020);
let vehiculo2 = new Vehiculo("Honda", "Civic", 2019);
vehiculo1.mostrarInformacion();
vehiculo2.mostrarInformacion();


/*Crear una clase Producto Tienda con nombre y precio. Implementar un método aplicar
Descuento(porcentaje) que retorne el precio final tras aplicar el descuento, pero sin
modificar el precio original del producto.*/

class ProductoTienda {
    nombre: string;
    precio: number;
    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
    aplicarDescuento(porcentaje: number): number {
        const descuento = (this.precio * porcentaje) / 100;
        return this.precio - descuento;
    }

}
let producto1 = new ProductoTienda("Camiseta", 50);
console.log(`El precio final de ${producto1.nombre} con un descuento del 20% es: $${producto1.aplicarDescuento(20)}`);

/*Crear una clase Personaje para un videojuego con los atributos nombre y nivel. El nivel
siempre debe iniciar en 1. Implementar un método llamado subirNivel() que aumente el
nivel del personaje en 1 cada vez que se llame, y un método verEstado() para mostrar el
nombre y nivel actual.*/

class Personaje {
    nombre: string;
    nivel: number = 1;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    subirNivel(): void {
        this.nivel++;
    }
    verEstado(): void {
        console.log(`Nombre: ${this.nombre}, Nivel: ${this.nivel}`);
    }

}
let personaje1 = new Personaje("Link");
personaje1.verEstado();
personaje1.subirNivel();
personaje1.verEstado();
