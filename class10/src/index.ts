class persona {
    nombre: string;
    edad: number;
    telefono: number;
    constructor(nombre: string, edad: number, telefono: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
 mostar(): void {
    alert('el nombre es:' + this.nombre);
        alert('la edad es:' + this.edad);
        alert('el telefono es:' + this.telefono);
}
}
let nombre: string = prompt("Ingrese su nombre") || '';
let edad: number = parseInt(prompt("Ingrese su edad") || '');
let telefono: number = parseInt(prompt("Ingrese su telefono") || '');
let people = new persona(nombre, edad, 2257777);
people.mostar();