"use strict";
/*class Usuario {
    public nombre: string;


constructor(nombre: string) {
    this.nombre = nombre;
}
}

const u = new Usuario("Juan");
console.log(u.nombre);
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*class usuario {
    private password: string;

    constructor(pass: string){
        this.password = pass;
    }
    validar(pass: string): boolean {
        return this.password === pass;
    }
}

const U = new usuario("1234");
console.log(U.validar("123"))

class persona {
    protected edad: number;
    constructor (edad: number){
        this.edad=edad;
    }
}

class estudiante extends persona {
    mostrarEdad(){
        return this.edad
    }
}

const e = new estudiante(20);
console.log(e.mostrarEdad()); */
////
class Usuario {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    login(pass) {
        if (pass === this.password) {
            return "Acceso concedido";
        }
        else {
            return "Contraseña incorrecta";
        }
    }
}
const L = new Usuario('juan', '1234');
console.log(L.login('1234'));
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    evaluarPrecio() {
        if (this.precio < 10) {
            return "Producto barato";
        }
        else if (this.precio <= 50) {
            return "Precio normal";
        }
        else {
            return "Producto caro";
        }
    }
}
const P = new Producto('pera', 7);
console.log(P.evaluarPrecio());
///
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
}
class Gerente extends Empleado {
    bono() {
        if (this.salario > 1000) {
            return this.salario * 0.2;
        }
        else {
            return this.salario * 0.1;
        }
    }
}
const H = new Gerente('maria', 500);
console.log(H.bono());
//# sourceMappingURL=index.js.map