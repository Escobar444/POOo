/**
 * Ejercicio 3: Panel de Alarmas
 * Activar diferentes sonidos de alerta según la emergencia
 */

// Clase abstracta base
abstract class Alarma {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  // Método abstracto que debe implementarse en las subclases
  abstract sonar(): void;

  // Método para obtener el estado
  getEstado(): string {
    return `Alarma: ${this.nombre}`;
  }
}

// Implementación: Alarma de Incendio
class Incendio extends Alarma {
  constructor() {
    super("Incendio");
  }

  sonar(): void {
    console.log("\n ALARMA DE INCENDIO ACTIVADA ");
    console.log("BEEP-BEEP BEEP-BEEP BEEP-BEEP");
    console.log("  ¡EVACUACIÓN INMEDIATA!");
  }
}

// Implementación: Alarma de Reloj (Despertador)
class Reloj extends Alarma {
  constructor() {
    super("Reloj - Despertador");
  }

  sonar(): void {
    console.log("\n ALARMA DE RELOJ ACTIVADA ");
    console.log("RIIIIING RIIIIING RIIIIING");
    console.log(" ¡Es hora de despertar!");
  }
}

// Panel de Control de Alarmas
class PanelDeControl {
  private alarmas: Map<string, Alarma>;

  constructor() {
    this.alarmas = new Map();
    this.registrarAlarmas();
  }

  private registrarAlarmas(): void {
    this.alarmas.set("incendio", new Incendio());
    this.alarmas.set("reloj", new Reloj());
  }

  activarAlarma(tipo: string): void {
    const alarma = this.alarmas.get(tipo.toLowerCase());

    if (alarma) {
      alarma.sonar();
    } else {
      console.log(
        ` Tipo de alarma no disponible: ${tipo}. Opciones: incendio, reloj`
      );
    }
  }

  listarAlarmas(): void {
    console.log("\n Alarmas disponibles:");
    this.alarmas.forEach((alarma, tipo) => {
      console.log(`  • ${tipo.toUpperCase()}: ${alarma.getEstado()}`);
    });
  }
}

// ========== EJEMPLO DE USO ==========
console.log("=== SISTEMA DE PANEL DE ALARMAS ===\n");

const panel = new PanelDeControl();

// Mostrar alarmas disponibles
panel.listarAlarmas();

// Activar alarma de incendio
console.log("\n--- Activando alarma de INCENDIO ---");
panel.activarAlarma("incendio");

// Activar alarma de reloj
console.log("\n--- Activando alarma de RELOJ ---");
panel.activarAlarma("reloj");

// Intentar activar una alarma inválida
console.log("\n--- Intentando activar alarma inválida ---");
panel.activarAlarma("terremoto");
