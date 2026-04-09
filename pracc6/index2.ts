class Usuario {
    private _id: number;
    private _nombre: string;
    private _edad: number;

    constructor(id: number, nombre: string, edad: number){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
    }
    get id(): number {
        return this._id;
    }
    get nombre(): string {
        return this._nombre;
    }
    set nombre(nuevoNombre: string){
        if (nuevoNombre.length > 2){
            this._nombre = nuevoNombre;
        } else {
            console.log("error: el nombre es muy corto.");
        }
    }
    get edad(): number {
        return this._edad;
    }
    set edad(nuevaEdad: number){
        if (nuevaEdad >= 18 && nuevaEdad <= 99){
            this._edad = nuevaEdad;
            console.log("edad actualizada a: " + nuevaEdad);
            
        } else {
            console.log("error: la edad no es válida.");
        }
    }
}
const usuario1 = new Usuario(101, "beto", 22);

console.log("Id del usuario: " + usuario1.id);

usuario1.nombre = "bullicio";
console.log("Nombre:  " + usuario1.nombre);

usuario1.edad = 25;
console.log("Edad: " + usuario1.edad);