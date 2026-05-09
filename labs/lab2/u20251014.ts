import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Paciente {
    protected nombre: string;
    protected fechaNacimiento: string;
    protected edad: number;
    protected telefono: number;
    protected responsable: string;
    protected telefonoResponsable: number;

    constructor(nombre: string, fechaNacimiento: string, edad: number, telefono: number, responsable: string, telefonoResponsable: number) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.telefono = telefono;
        this.responsable = responsable;
        this.telefonoResponsable = telefonoResponsable;
    }

    abstract pasarConsulta(sintomas: string): void;

    mostrarDatos(): void {
        console.log("==== DATOS DEL PACIENTE ====");
        console.log("Nombre: " + this.nombre);
        console.log("Fecha de nacimiento: " + this.fechaNacimiento);
        console.log("Edad: " + this.edad);
        console.log("Teléfono: " + this.telefono);
        console.log("Responsable: " + this.responsable);
        console.log("Teléfono del responsable: " + this.telefonoResponsable);
        console.log("============================");
    }
}

class ConsultaGeneral extends Paciente {
    pasarConsulta(sintomas: string): void {
        this.mostrarDatos();
        const costo = 50;
        const descuento = 14;
        const descuentoCalculado = (costo * descuento) / 100;
        const costoFinal = costo - descuentoCalculado;
        
        console.log("Síntomas: " + sintomas);
        console.log("Costo base: $" + costo);
        console.log("Descuento (14%): $" + descuentoCalculado.toFixed(2));
        console.log("COSTO A CANCELAR: $" + costoFinal.toFixed(2));
        console.log("==========================================\n");
    }
}

class ConsultaEspecialidad extends Paciente {
    pasarConsulta(sintomas: string): void {
        this.mostrarDatos();
        const costo = 90;
        const descuento = 14;
        const descuentoCalculado = (costo * descuento) / 100;
        const costoConDescuento = costo - descuentoCalculado;
        const descuentoEquipo = (costoConDescuento * 3) / 100;
        const costoFinal = costoConDescuento - descuentoEquipo;
        
        console.log("Síntomas: " + sintomas);
        console.log("Costo base: $" + costo);
        console.log("Descuento por consulta (14%): $" + descuentoCalculado.toFixed(2));
        console.log("Descuento por equipo (3%): $" + descuentoEquipo.toFixed(2));
        console.log("COSTO A CANCELAR: $" + costoFinal.toFixed(2));
        console.log("==========================================\n");
    }
}
////
class ConsultaEmergencia extends Paciente {
    pasarConsulta(sintomas: string): void {
        this.mostrarDatos();
        const costo = 150;
        
        console.log("Síntomas: " + sintomas);
        console.log("Tipo de consulta: EMERGENCIA");
        console.log("COSTO A CANCELAR: $" + costo);
        console.log("==========================================\n");
    }
}

console.log("\n========== SISTEMA DE CONSULTAS MÉDICAS ==========\n");

rl.question("Ingrese nombre del paciente: ", (nombre) => {
    rl.question("Ingrese fecha de nacimiento (dd/mm/yyyy): ", (fechaNacimiento) => {
        rl.question("Ingrese teléfono del paciente: ", (telefono) => {
            rl.question("Ingrese nombre del responsable: ", (responsable) => {
                rl.question("Ingrese teléfono del responsable: ", (telefonoResponsable) => {
                    
                    const telefonoNum = parseInt(telefono);
                    const telefonoResponsableNum = parseInt(telefonoResponsable);
                    
                
                    const partes = fechaNacimiento.split("/");
                    const fecha = new Date(parseInt(partes[2]!), parseInt(partes[1]!) - 1, parseInt(partes[0]!));
                    const hoy = new Date();
                    let edad = hoy.getFullYear() - fecha.getFullYear();
                    const mesActual = hoy.getMonth() - fecha.getMonth();
                    if (mesActual < 0 || (mesActual === 0 && hoy.getDate() < fecha.getDate())) {
                        edad = edad - 1;
                    }
                    
                    console.log("\n========== TIPO DE CONSULTA ==========");
                    console.log("1. Consulta General ($50)");
                    console.log("2. Consulta de Especialidad ($90)");
                    console.log("3. Consulta de Emergencia ($150)");
                    console.log("=====================================\n");
                    
                    rl.question("Seleccione el tipo de consulta (1-3): ", (opcion) => {
                        rl.question("Ingrese los síntomas del paciente: ", (sintomas) => {
                            
                            console.log("\n==========================================");
                            console.log("========== RESULTADO DE LA CONSULTA ==========\n");
                            
                            let paciente: Paciente;
                            
                            if (opcion === "1") {
                                paciente = new ConsultaGeneral(nombre, fechaNacimiento, edad, telefonoNum, responsable, telefonoResponsableNum);
                                paciente.pasarConsulta(sintomas);
                            } else if (opcion === "2") {
                                paciente = new ConsultaEspecialidad(nombre, fechaNacimiento, edad, telefonoNum, responsable, telefonoResponsableNum);
                                paciente.pasarConsulta(sintomas);
                            } else if (opcion === "3") {
                                paciente = new ConsultaEmergencia(nombre, fechaNacimiento, edad, telefonoNum, responsable, telefonoResponsableNum);
                                paciente.pasarConsulta(sintomas);
                            } else {
                                console.log("Opción no válida");
                            }
                            
                            rl.close();
});
 });
  });
    });
     });
     });
        });

