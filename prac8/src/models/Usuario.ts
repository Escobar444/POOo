

class Usuario {
private id?: number;
private nombre: string;
private email: string;
constructor(nombre: string, email: string, id?: number) {
this.nombre = nombre;
this.email = email;
this.id = id;
}
public getNombre(): string { return this.nombre; }
public getEmail(): string { return this.email; }
}
export default Usuario;