class inventario {
    id: number;
    producto: string;
    codigo: string;
    fecha: string;
    precio: number;
    constructor(id: number, producto: string, codigo: string, fecha: string, precio: number) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fecha = fecha;
        this.precio = precio;
    }
    agregar(precio2: number, precio3: number): void {
        console.log('producto agregado con precio $'+this.precio);
        console.log('precios de descuento: $'+precio2+' y $'+precio3);
    }
}
let producto = new inventario(1,'toallas humedas', 'psdm32', '2024-06-01', 150);
producto.agregar(120, 100);