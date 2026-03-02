class aniales {
    nombre: string;
    categoria: string;
    raza: string;
    constructor(nombre: string, categoria: string, raza: string) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }
    mostar(): void{
        console.log( 'el animal es un ' + this.categoria + ' su nombre es ' + this.nombre);
    }
    }

    class Encargado extends aniales {
        dueño: string;
        constructor(nombre: string, categoria: string, raza: string, dueño: string) {
            super(nombre, categoria, raza);
            this.dueño = dueño;
        }
        mensaje(): void {
            console.log('el animalito que es un: ' + this.categoria)
            console.log('su nombre es: ' + this.nombre + ' y su dueño es: ' + this.dueño);
    }
    }

    class venta extends Encargado {
        precio: number;
        constructor(nombre: string, categoria: string, raza: string, dueño: string, precio: number) {
            super(nombre, categoria, raza, dueño);
            this.precio = precio;
        }

        msjVenta(): void {
            console.log('se vende un: ' + this.categoria + ' su nombre es: ' + this.nombre + ' y su precio es: ' + this.precio);
        }
    }

    const ob = new venta('killer','perro','pitbull','miguel', 1000);
    ob.mostar();
    ob.mensaje();
    ob.msjVenta();
 

