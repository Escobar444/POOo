var persona = /** @class */ (function () {
    function persona(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    persona.prototype.mostar = function () {
        alert('el nombre es:' + this.nombre);
        alert('la edad es:' + this.edad);
        alert('el telefono es:' + this.telefono);
    };
    return persona;
}());
var nombre = prompt("Ingrese su nombre") || '';
var edad = parseInt(prompt("Ingrese su edad") || '');
var telefono = parseInt(prompt("Ingrese su telefono") || '');
var people = new persona(nombre, edad, 2257777);
people.mostar();
