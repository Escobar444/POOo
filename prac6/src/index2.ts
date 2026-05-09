import * as readline from 'readline';

class SensorDiesel {
  private _nivel: number;
  private readonly MIN_NIVEL = 0;
  private readonly MAX_NIVEL = 100;
  private readonly NIVEL_CRITICO = 15;

  constructor(nivelInicial: number = 50) {
    this._nivel = this.validarNivel(nivelInicial);
  }

  /**
   * Valida que el nivel esté dentro del rango permitido
   */
  private validarNivel(valor: number): number {
    if (valor < this.MIN_NIVEL) {
      console.log(`❌ Error: No se puede establecer un nivel negativo (${valor}%)`);
      return this.MIN_NIVEL;
    }
    if (valor > this.MAX_NIVEL) {
      console.log(`❌ Error: El nivel no puede superar el 100% (intentaste ${valor}%)`);
      return this.MAX_NIVEL;
    }
    return valor;
  }

  /**
   * Establece el nivel de combustible (con validación)
   */
  set nivel(valor: number) {
    const nivelValido = this.validarNivel(valor);
    if (nivelValido !== this._nivel) {
      this._nivel = nivelValido;
    } else if (valor >= this.MIN_NIVEL && valor <= this.MAX_NIVEL) {
      this._nivel = valor;
    }
  }

  /**
   * Obtiene el nivel de combustible en porcentaje
   */
  get nivelPorcentaje(): string {
    return `${this._nivel}%`;
  }

  /**
   * Obtiene el nivel numérico
   */
  getNivelNumero(): number {
    return this._nivel;
  }

  /**
   * Getter calculado que retorna el estado de la reserva
   */
  get estadoReserva(): string {
    if (this._nivel < this.NIVEL_CRITICO) {
      return '🚨 ALERTA: NIVEL CRÍTICO';
    }
    return '✓ Nivel Normal';
  }

  /**
   * Obtiene información detallada del sensor
   */
  obtenerInfo(): string {
    const barraProgreso = this.generarBarraProgreso();
    return `
╔═══════════════════════════════════════════╗
║     MONITOR DE COMBUSTIBLE - CAMIÓN      ║
╠═══════════════════════════════════════════╣
║ Nivel Actual:     ${String(this._nivel).padStart(3)}%                    ║
║ Estado:           ${this.estadoReserva.padEnd(25)} ║
║ Rango:            ${this.MIN_NIVEL}% - ${this.MAX_NIVEL}%                       ║
║ Alerta crítica:   < ${this.NIVEL_CRITICO}%                       ║
║                                           ║
║ Barra de progreso:                        ║
║ ${barraProgreso}                    ║
╚═══════════════════════════════════════════╝`;
  }

  /**
   * Genera una barra visual del nivel de combustible
   */
  private generarBarraProgreso(): string {
    const cantidadBloques = Math.round((this._nivel / 100) * 20);
    const bloqueVacio = 20 - cantidadBloques;

    let barra = '[';
    barra += '█'.repeat(cantidadBloques);
    barra += '░'.repeat(bloqueVacio);
    barra += ']';

    return barra;
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

  const sensor = new SensorDiesel(50);

  console.clear();
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║        SISTEMA DE MONITOREO DE COMBUSTIBLE - CAMIONES         ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  console.log(sensor.obtenerInfo());

  const hacerPregunta = () => {
    rl.question(
      '\n¿Cuál es el nivel de combustible? (0-100, o escribe "salir"): ',
      (entrada: string) => {
        if (entrada.toLowerCase() === 'salir') {
          console.log('\n👋 Monitoreo finalizado. ¡Buen viaje!\n');
          rl.close();
          return;
        }

        const nivel = parseFloat(entrada);

        if (isNaN(nivel)) {
          console.log('❌ Error: Debes ingresar un número válido.\n');
          hacerPregunta();
          return;
        }

        console.log(`\n📊 Procesando nivel: ${nivel}%`);
        sensor.nivel = nivel;

        console.log(`✓ Nivel de combustible: ${sensor.nivelPorcentaje}`);
        console.log(`✓ Estado: ${sensor.estadoReserva}`);

        if (nivel < 15 && nivel >= 0 && nivel <= 100) {
          console.log('\n⚠️  ¡ADVERTENCIA! Es recomendable recargar combustible pronto.\n');
        }

        console.log(sensor.obtenerInfo());

        hacerPregunta();
      }
    );
  };

  hacerPregunta();
}

// Ejecutar la aplicación
main();
