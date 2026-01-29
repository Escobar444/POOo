class POO {
    codigo:string;
    nombre:string;
    edad:number;
    laboratorio:number;
    parciales:number;

constructor(codigo:string, nombre:string, edad:number, laboratorio:number, parciales:number){
    this.codigo = codigo;
    this.nombre = nombre;
    this.edad = edad;
    this.laboratorio = laboratorio;
    this.parciales = parciales;
}
public mostrarDatos(): void {
    console.log('el estudiante:' + this.nombre)
    console.log('con codigo:' + this.codigo)
    console.log('de edad:' + this.edad)
    console.log('tiene un promedio de laboratorio de:' + this.laboratorio)
    console.log('y un promedio de parciales de:' + this.parciales)
}
public mostrarNotas(): void {
    console.log('lab:' + this.laboratorio + 'parcial:' + this.parciales)
}
}

class redes {
    nombre:string;
    lab1:number;
    lab2:number;
    lab3:number;
    parcial1:number;
    parcial2:number;
    parcial3:number;

constructor(nombre:string, lab1:number, lab2:number, lab3:number, parcial1:number, parcial2:number, parcial3:number){
    this.nombre = nombre;
    this.lab1 = lab1;
    this.lab2 = lab2;
    this.lab3 = lab3;
    this.parcial1 = parcial1;
    this.parcial2 = parcial2;
    this.parcial3 = parcial3;
}
public mostrarNotass(): void {
    console.log('el estudiante:' + this.nombre)
let promedio_lab = (this.lab1 + this.lab2 + this.lab3)*0.6 / 3;
let promedio_parcial = (this.parcial1 + this.parcial2 + this.parcial3)*0.4 / 3;
let promedio_final = promedio_lab + promedio_parcial;
    console.log('tiene un promedio de laboratorio de:' + promedio_lab)
    console.log('y un promedio de parciales de:' + promedio_parcial)
    console.log('su promedio final es de:' + promedio_final)

}

}
//objetos instanciados a POO
//let estudiante1 = new POO("u20250234", "Isaac", 22, 0, 0);
//estudiante1.mostrarDatos();


//estudiante1.mostrarNotas();
//objetos instanciados a redes
let estudiante2 = new redes('pedro', 9, 8, 9, 7, 9, 6);
estudiante2.mostrarNotass();