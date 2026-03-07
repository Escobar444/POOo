class vehiculo {
    protected marca: string;
    protected modelo: string
    protected año: number;

    constructor(marca: string, modelo: string, año: number) {
        //validaciones
        if (!marca || !modelo) throw new Error("La marca y el modelo son obligatorios");
        if (año > new Date().getFullYear()) throw new Error("El año no es válido");
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    public mostrarInfo(): void {
        console.log(`vehiculo: ${this.marca} ${this.modelo} (${this.año})`);
    }
}

class automovil extends vehiculo {
    private numPuertas: number;

    constructor(marca: string, modelo: string, año: number, numPuertas: number) {
        super(marca, modelo, año);
        this.numPuertas = numPuertas;
    }
    public override mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Número de puertas: ${this.numPuertas}`);
    }
}
console.log('---- iniciando registro de vehículos ----');

try {
    const micarro = new automovil("Toyota", "Corolla", 2020, 4);
    micarro.mostrarInfo();
} catch (error: any) {
    console.log(`[LOG]: se bloqueo un intento de registro invalido: Razón: ${error.message}`);
}

console.log('---- fin del registro de vehículos ----');


//tareaaaa

/*Ejercicio 1: Sistema de Ahorros Bancarios
Instrucciones:
1. Clase Base Cuenta: Debe recibir titular y saldo. Si el saldo es negativo, lanza un error.
2. Clase Hija CuentaAhorro: Añade tasaInteres. Debe heredar del padre.
3. Método aplicarInteres(): Debe calcular el interés sobre el saldo actual y sumarlo.
4. Instancia: Crea una cuenta con un saldo inicial y aplica el interés.*/

class cuenta {
    protected titular: string;
    protected saldo: number;
    constructor(titular: string, saldo: number) {
        if (saldo < 0) throw new Error("El saldo no puede ser negativo");
        this.titular = titular;
        this.saldo = saldo;
    }
    public mostrarInfo(): void {
        console.log(`Cuenta de ${this.titular} con saldo: $${this.saldo.toFixed(2)}`);
    }

}

class cuentaAhorro extends cuenta {
    private tasaInteres: number;
    constructor(titular: string, saldo: number, tasaInteres: number) {
        super(titular, saldo);
        this.tasaInteres = tasaInteres;
    }
    public aplicarInteres(): void {
        const interes = this.saldo * (this.tasaInteres / 100);
        this.saldo += interes;
        console.log(`Interés aplicado: $${interes.toFixed(2)}. Nuevo saldo: $${this.saldo.toFixed(2)}`);
    }
}

console.log('---- iniciando registro de cuentas de ahorro ----');
try {
    const miCuentaAhorro = new cuentaAhorro("Juan Pérez", 1000, 5);
    miCuentaAhorro.mostrarInfo();
    miCuentaAhorro.aplicarInteres();
} catch (error: any) {
    console.log(`[LOG]: se bloqueo un intento de registro invalido: Razón: ${error.message}`);
}
console.log('---- fin del registro de cuentas de ahorro ----');


/*Ejercicio 2: Registro Académico (Personas)
Instrucciones:
1. Clase Base Persona: Atributos nombre y edad. Validar que la edad sea mayor a 0.
2. Clase Hija Estudiante: Añadir atributo carnet.
3. Clase Hija Docente: Añadir atributo especialidad.
4. Implementar presentarse() en ambas clases para mostrar sus datos específicos.*/

class persona {
    protected nombre: string
    protected edad: number;
    constructor(nombre: string, edad: number) {
        if (edad <= 0) throw new Error("La edad debe ser mayor a 0");
        this.nombre = nombre;
        this.edad = edad;
    }
    public mostrarInfo(): void {
        console.log(`Persona: ${this.nombre}, Edad: ${this.edad}`);
    }
}

class estudiante extends persona {
    private carnet: string;
    constructor(nombre: string, edad: number, carnet: string) {
        super(nombre, edad);
        this.carnet = carnet;
    }
    public presentarse(): void {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y mi carnet es ${this.carnet}`);
    }
}

class docente extends persona {
    private especialidad: string;
    constructor(nombre: string, edad: number, especialidad: string) {
        super(nombre, edad);
        this.especialidad = especialidad;
    }
    public presentarse(): void {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y mi especialidad es ${this.especialidad}`);
    }
}

console.log('---- iniciando registro de personas ----');
try {
    const miEstudiante = new estudiante("María López", 20, "12345");
    miEstudiante.mostrarInfo();
    miEstudiante.presentarse();

    const miDocente = new docente("Carlos Rodríguez", 45, "Matemáticas");
    miDocente.mostrarInfo();
    miDocente.presentarse();
} catch (error: any) {
    console.log(`[LOG]: se bloqueo un intento de registro invalido: Razón: ${error.message}`);
}
console.log('---- fin del registro de personas ----');

/*Ejercicio 3: Tienda de Productos (Físicos vs Digitales)
Instrucciones:
1. Clase Base Producto: Atributos nombre y precioBase.
2. Clase Hija ProductoFisico: Añade pesoKG. El precio final suma $2 por cada kilo de
peso.
3. Clase Hija ProductoDigital: Añade plataforma. El precio final es igual al precio base.
4. Instancia: Calcular y mostrar el precio final de un producto físico.
*/

class producto {
    protected nombre: string;
    protected precioBase: number;
    constructor(nombre: string, precioBase: number) {
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
    public mostrarInfo(): void {
        console.log(`Producto: ${this.nombre}, Precio Base: $${this.precioBase.toFixed(2)}`);
    }
}

class productoFisico extends producto {
    private pesoKG: number;
    constructor(nombre: string, precioBase: number, pesoKG: number) {
        super(nombre, precioBase);
        this.pesoKG = pesoKG;
    }
    public calcularPrecioFinal(): number {
        return this.precioBase + (2 * this.pesoKG);
    }
    public mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Peso: ${this.pesoKG} kg, Precio Final: $${this.calcularPrecioFinal().toFixed(2)}`);
    }
}

class productoDigital extends producto {
    private plataforma: string;
    constructor(nombre: string, precioBase: number, plataforma: string) {
        super(nombre, precioBase);
        this.plataforma = plataforma;
    }
    public mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Plataforma: ${this.plataforma}, Precio Final: $${this.precioBase.toFixed(2)}`);
    }
}
console.log('---- iniciando registro de productos ----');
try {
    const miProductoFisico = new productoFisico("Laptop", 1000, 5);
    miProductoFisico.mostrarInfo();
    const miProductoDigital = new productoDigital("Software", 200, "Windows");
    miProductoDigital.mostrarInfo();
} catch (error: any) {
    console.log(`[LOG]: se bloqueo un intento de registro invalido: Razón: ${error.message}`);
}
console.log('---- fin del registro de productos ----');


//practica

class contenido {
    constructor (protected titulo: string,
    protected duracionMinutos: number,
    protected clasificacion: 'A' | 'B' | 'C'
    ) {
        if (!titulo.trim()) throw new Error("El título no puede estar vacío");
        if (duracionMinutos <= 0) throw new Error("La duración debe ser mayor a 0");

}
    public  mostrarDetalles(): void {
        console.log(`Titulo: ${this.titulo} | clasificación: ${this.clasificacion}`)
}
}

