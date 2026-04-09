/*crear un  sistema donde se utilice polimorfismo para una tienda donde se detalla el precio normal para cada articulo */

abstract class prodcuto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
    //metodo
    abstract precioNomal():void;

    mostrarInformacion(): void {
        console.log(`El producto es ${this.nombre} y su precio es ${this.precio}`);
    }
}

class electronico extends prodcuto {
    override precioNomal(): void {
        console.log(`El precio normal del producto es ${this.precio}`);
    }
}

class ropa extends prodcuto {
    override precioNomal(): void {
        console.log(`El precio normal del producto es ${this.precio}`);
    }
}

const prodcuto1: prodcuto[] =[];
prodcuto1.push(new electronico("celular", 1000));
prodcuto1.push(new ropa("camisa", 500));

prodcuto1.forEach((producto) => {
    producto.mostrarInformacion();
    producto.precioNomal();
})

/////////////

console.log("------------------------------------------------------------");

/*membresia de gym utilizando polimorfismo donde se utiliza el metodo abstracto para calcular el precio de la membresia segun el tipo de membresia*/

abstract class membresia {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    abstract calcularPrecio(): void;

    mostrarInformacion(): void {
        console.log(`La membresia es de tipo ${this.tipo}`);
    }
}

class basica extends membresia {
    override calcularPrecio(): void {
        console.log("=== detalles de la mebresia basica=====");
        
        console.log("El precio de la membresia basica es de $100");
        console.log("entrenamiento normal sin asistencia");

        console.log("===========================");
        

        
    }
}
class premiun extends membresia {
    override calcularPrecio(): void {
        console.log("===detalles de la membresia premiun====");
        
        console.log("El precio de la membresia premiun es de $200");
        console.log("entrenamiento avanzado con entrenador personal");

        console.log("==========================");
        
        
    }
}

const membresia1: membresia[] = [];
membresia1.push(new basica("basica"));
membresia1.push(new premiun("premiun"));

membresia1.forEach((membresia) => {
    membresia.mostrarInformacion();
    membresia.calcularPrecio();
})
