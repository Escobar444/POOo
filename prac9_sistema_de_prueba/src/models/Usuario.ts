export default class Usuario {
private id?: number;
private nombre: string;
private apellido: string;
private email: string;
private password: string;
constructor(nombre: string, apellido: string, email: string, password: string,
id?: number) {
this.nombre = nombre;
this.apellido = apellido;
this.email = email;
this.password = password;
this.id = id;
}
public getNombre() { return this.nombre; }
public getApellido() { return this.apellido; }
public getEmail() { return this.email; }
public getPassword() { return this.password; }
}