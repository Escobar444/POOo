import * as readline from 'readline';

/**
 * Interfaz que deben cumplir todos los dispositivos de seguridad
 */
interface DispositivoSeguridad {
  nombre: string;
  activar(): void;
  desactivar(): void;
  obtenerEstado(): string;
}

/**
 * Clase Alarma - implementa DispositivoSeguridad
 */
class Alarma implements DispositivoSeguridad {
  nombre: string;
  private activa: boolean = false;

  constructor(nombre: string = 'Alarma Principal') {
    this.nombre = nombre;
  }

  activar(): void {
    this.activa = true;
    console.log(`🔊 ${this.nombre}: ¡ALARMA ACTIVADA! 🔊`);
  }

  desactivar(): void {
    this.activa = false;
    console.log(`🔇 ${this.nombre}: Alarma desactivada`);
  }

  obtenerEstado(): string {
    return this.activa ? '🔊 ACTIVA' : '🔇 Inactiva';
  }
}

/**
 * Clase Aspersor - implementa DispositivoSeguridad
 */
class Aspersor implements DispositivoSeguridad {
  nombre: string;
  private activo: boolean = false;

  constructor(nombre: string = 'Aspersor de Agua') {
    this.nombre = nombre;
  }

  activar(): void {
    this.activo = true;
    console.log(`💦 ${this.nombre}: ¡SISTEMA DE ASPERSIÓN ACTIVADO! 💦`);
  }

  desactivar(): void {
    this.activo = false;
    console.log(`🚫 ${this.nombre}: Sistema de aspersión desactivado`);
  }

  obtenerEstado(): string {
    return this.activo ? '💦 ACTIVO' : '🚫 Inactivo';
  }
}

/**
 * Clase Luz - implementa DispositivoSeguridad
 */
class Luz implements DispositivoSeguridad {
  nombre: string;
  private encendida: boolean = false;

  constructor(nombre: string = 'Luz de Emergencia') {
    this.nombre = nombre;
  }

  activar(): void {
    this.encendida = true;
    console.log(`💡 ${this.nombre}: ¡LUCES DE EMERGENCIA ENCENDIDAS! 💡`);
  }

  desactivar(): void {
    this.encendida = false;
    console.log(`🌑 ${this.nombre}: Luces apagadas`);
  }

  obtenerEstado(): string {
    return this.encendida ? '💡 ENCENDIDA' : '🌑 Apagada';
  }
}

/**
 * Sistema Central de Alerta de Emergencia
 */
class SistemaAleriaEmergencia {
  private dispositivos: DispositivoSeguridad[] = [];
  private emergenciaActiva: boolean = false;

  /**
   * Registra un dispositivo en el sistema
   */
  registrarDispositivo(dispositivo: DispositivoSeguridad): void {
    this.dispositivos.push(dispositivo);
    console.log(`✓ ${dispositivo.nombre} registrado en el sistema`);
  }

  /**
   * Desregistra un dispositivo
   */
  desregistrarDispositivo(nombre: string): void {
    this.dispositivos = this.dispositivos.filter(d => d.nombre !== nombre);
    console.log(`✓ Dispositivo "${nombre}" removido del sistema`);
  }

  /**
   * Activa todos los dispositivos (modo emergencia)
   */
  activarEmergencia(): void {
    if (this.emergenciaActiva) {
      console.log('⚠️  La emergencia ya está activa');
      return;
    }

    console.log('\n╔════════════════════════════════════════════╗');
    console.log('║  🚨 ¡EMERGENCIA DETECTADA! 🚨          ║');
    console.log('║  Activando todos los dispositivos...    ║');
    console.log('╚════════════════════════════════════════════╝\n');

    this.dispositivos.forEach(dispositivo => {
      dispositivo.activar();
    });

    this.emergenciaActiva = true;
  }

  /**
   * Desactiva todos los dispositivos
   */
  desactivarEmergencia(): void {
    if (!this.emergenciaActiva) {
      console.log('⚠️  No hay emergencia activa');
      return;
    }

    console.log('\n╔════════════════════════════════════════════╗');
    console.log('║  ✓ Emergencia desactivada                 ║');
    console.log('║  Desactivando todos los dispositivos...  ║');
    console.log('╚════════════════════════════════════════════╝\n');

    this.dispositivos.forEach(dispositivo => {
      dispositivo.desactivar();
    });

    this.emergenciaActiva = false;
  }

  /**
   * Obtiene el estado de todos los dispositivos
   */
  obtenerEstado(): string {
    const estadoEmergencia = this.emergenciaActiva ? '🚨 ACTIVA' : '✓ Inactiva';

    let reporte = `
╔══════════════════════════════════════════════════════════╗
║      SISTEMA DE ALERTA DE EMERGENCIA DEL EDIFICIO       ║
╠══════════════════════════════════════════════════════════╣
║ Estado de Emergencia: ${estadoEmergencia.padEnd(36)}║
║ Total de dispositivos: ${String(this.dispositivos.length).padEnd(32)}║
║                                                          ║
║ DISPOSITIVOS REGISTRADOS:                               ║
╠══════════════════════════════════════════════════════════╣`;

    if (this.dispositivos.length === 0) {
      reporte += '\n║ (Sin dispositivos registrados)                             ║';
    } else {
      this.dispositivos.forEach(dispositivo => {
        reporte += `\n║ • ${dispositivo.nombre.padEnd(18)} - ${dispositivo.obtenerEstado().padEnd(27)}║`;
      });
    }

    reporte += '\n╚══════════════════════════════════════════════════════════╝';

    return reporte;
  }

  /**
   * Retorna la cantidad de dispositivos
   */
  getCantidadDispositivos(): number {
    return this.dispositivos.length;
  }

  /**
   * Obtiene lista de dispositivos
   */
  obtenerDispositivos(): DispositivoSeguridad[] {
    return this.dispositivos;
  }
}

/**
 * Función principal con interfaz readline
 */
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const sistema = new SistemaAleriaEmergencia();

  // Registrar algunos dispositivos de ejemplo
  sistema.registrarDispositivo(new Alarma('Alarma Piso 1'));
  sistema.registrarDispositivo(new Alarma('Alarma Piso 2'));
  sistema.registrarDispositivo(new Aspersor('Aspersor Zona A'));
  sistema.registrarDispositivo(new Aspersor('Aspersor Zona B'));
  sistema.registrarDispositivo(new Luz('Luz Pasillo Principal'));
  sistema.registrarDispositivo(new Luz('Luz Sala de Servidores'));

  console.clear();
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║   SISTEMA DE ALERTA DE EMERGENCIA DEL EDIFICIO               ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  console.log('✓ Sistema inicializado con dispositivos de seguridad');
  console.log(sistema.obtenerEstado());

  const mostrarMenu = () => {
    console.log('\n¿Qué deseas hacer?');
    console.log('1. Activar emergencia');
    console.log('2. Desactivar emergencia');
    console.log('3. Ver estado del sistema');
    console.log('4. Agregar nuevo dispositivo');
    console.log('5. Salir\n');
  };

  const hacerPregunta = () => {
    mostrarMenu();

    rl.question('Selecciona una opción (1-5): ', (opcion: string) => {
      switch (opcion.trim()) {
        case '1':
          sistema.activarEmergencia();
          hacerPregunta();
          break;

        case '2':
          sistema.desactivarEmergencia();
          hacerPregunta();
          break;

        case '3':
          console.log(sistema.obtenerEstado());
          hacerPregunta();
          break;

        case '4':
          rl.question(
            '\n¿Qué tipo de dispositivo deseas agregar? (1=Alarma, 2=Aspersor, 3=Luz): ',
            (tipo: string) => {
              rl.question('¿Nombre del dispositivo?: ', (nombre: string) => {
                let dispositivo: DispositivoSeguridad | null = null;

                switch (tipo.trim()) {
                  case '1':
                    dispositivo = new Alarma(nombre);
                    break;
                  case '2':
                    dispositivo = new Aspersor(nombre);
                    break;
                  case '3':
                    dispositivo = new Luz(nombre);
                    break;
                  default:
                    console.log('❌ Tipo de dispositivo no válido');
                }

                if (dispositivo) {
                  sistema.registrarDispositivo(dispositivo);
                  console.log(sistema.obtenerEstado());
                }

                hacerPregunta();
              });
            }
          );
          break;

        case '5':
          console.log(
            '\n👋 Saliendo del sistema. El edificio continúa siendo monitoreado.\n'
          );
          rl.close();
          return;

        default:
          console.log('❌ Opción no válida. Intenta de nuevo.');
          hacerPregunta();
      }
    });
  };

  hacerPregunta();
}

// Ejecutar la aplicación
main();
