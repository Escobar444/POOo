/*class Usuario {
    public nombre: string;


constructor(nombre: string) {
    this.nombre = nombre;
}
}

const u = new Usuario("Juan");
console.log(u.nombre);
*/

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
  public username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  login(pass: string): string {
    if (pass === this.password) {
      return "Acceso concedido";
    } else {
      return "Contraseña incorrecta";
    }
  }
}
const L = new Usuario('juan', '1234');
console.log(L.login('1234'))

class Producto {
  constructor(
    public nombre: string,
    private precio: number
  ) {}

  evaluarPrecio(): string {
    if (this.precio < 10) {
      return "Producto barato";
    } else if (this.precio <= 50) {
      return "Precio normal";
    } else {
      return "Producto caro";
    }
  }
}
const P = new Producto('pera', 7);
console.log(P.evaluarPrecio())

///

class Empleado {
  constructor(
    public nombre: string,
    protected salario: number
  ) {}
}

class Gerente extends Empleado {
  bono(): number {
    if (this.salario > 1000) {
      return this.salario * 0.2;
    } else {
      return this.salario * 0.1;
    }
  }
}

const H = new Gerente('maria', 500)
console.log(H.bono())

///

class Sistema {
  verificarRol(rol: string): string {
    switch (rol) {
      case "admin":
        return "Acceso total";
      case "editor":
        return "Acceso limitado";
      case "usuario":
        return "Acceso básico";
      default:
        return "Rol no válido";
    }
  }
}

const S = new Sistema()