// Entidad: Solo almacena información del estudiante
class Estudiante {
    constructor(
        public nombre: string, 
        public carnet: string, 
        public carrera: string
    ) {}
}

// Gestor: Se encarga exclusivamente de las acciones de almacenamiento
class GestorEstudiante {
    guardarEnBaseDeDatos(estudiante: Estudiante): void {
        console.log(`[DB]: Registrando a ${estudiante.nombre} (Carnet: ${estudiante.carnet})...`);
    }

    generarExpedienteDigital(estudiante: Estudiante): void {
        console.log(`[PDF]: Creando ficha académica para la carrera de ${estudiante.carrera}.`);
    }
}

// Ejecución
const alumno = new Estudiante("Josue Montoya", "U2026001", "Software");
const persistencia = new GestorEstudiante();
persistencia.guardarEnBaseDeDatos(alumno);