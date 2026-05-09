import * as readline from 'readline';

class Termostato {
  private _temperatura: number;
  private readonly MIN_TEMP = 18;
  private readonly MAX_TEMP = 25;

  constructor(temperaturaInicial: number = 20) {
    this._temperatura = this.ajustarTemperatura(temperaturaInicial, true);
  }

  /**
   * Ajusta la temperatura al rango permitido
   * @param valor Temperatura a ajustar
   * @param esInicial Si es el valor inicial, no muestra aviso
   * @returns Temperatura ajustada
   */
  private ajustarTemperatura(valor: number, esInicial: boolean = false): number {
    let temperaturaAjustada = valor;

    if (valor < this.MIN_TEMP) {
      temperaturaAjustada = this.MIN_TEMP;
      if (!esInicial) {
        console.log(
          `⚠️  AVISO: Temperatura ${valor}°C está por debajo del mínimo permitido (${this.MIN_TEMP}°C).`
        );
        console.log(`✓ Ajustada automáticamente a ${this.MIN_TEMP}°C\n`);
      }
    } else if (valor > this.MAX_TEMP) {
      temperaturaAjustada = this.MAX_TEMP;
      if (!esInicial) {
        console.log(
          `⚠️  AVISO: Temperatura ${valor}°C está por encima del máximo permitido (${this.MAX_TEMP}°C).`
        );
        console.log(`✓ Ajustada automáticamente a ${this.MAX_TEMP}°C\n`);
      }
    }

    return temperaturaAjustada;
  }

  /**
   * Establece la temperatura (con validación automática)
   */
  set temperatura(valor: number) {
    this._temperatura = this.ajustarTemperatura(valor);
  }

  /**
   * Obtiene la temperatura con el formato "°C"
   */
  get temperatura(): string {
    return `${this._temperatura}°C`;
  }

  /**
   * Obtiene el valor numérico de la temperatura
   */
  getTemperaturaNumero(): number {
    return this._temperatura;
  }

  /**
   * Retorna información del estado actual
   */
  obtenerInfo(): string {
    return `
╔════════════════════════════════════════╗
║        ESTADO DEL TERMOSTATO          ║
╠════════════════════════════════════════╣
║ Temperatura Actual: ${String(this._temperatura).padEnd(17)}°C  ║
║ Rango Permitido:   ${this.MIN_TEMP}°C - ${this.MAX_TEMP}°C         ║
║ Estado:            ${this.obtenerEstado().padEnd(18)} ║
╚════════════════════════════════════════╝`;
  }

  private obtenerEstado(): string {
    if (this._temperatura < 21) return '🥶 Frío';
    if (this._temperatura > 23) return '🔥 Caliente';
    return '✓ Normal';
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

  const termostato = new Termostato(20);

  console.clear();
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║           CONTROL DE TEMPERATURA - SALA DE SERVIDORES         ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  console.log(termostato.obtenerInfo());

  const hacerPregunta = () => {
    rl.question(
      '\n¿Qué temperatura deseas establecer? (o escribe "salir" para terminar): ',
      (entrada: string) => {
        if (entrada.toLowerCase() === 'salir') {
          console.log('\n👋 ¡Hasta luego! La sala de servidores está siendo monitoreada.\n');
          rl.close();
          return;
        }

        const temperatura = parseFloat(entrada);

        if (isNaN(temperatura)) {
          console.log('❌ Error: Debes ingresar un número válido.\n');
          hacerPregunta();
          return;
        }

        console.log(`\n📊 Intentando establecer temperatura en ${temperatura}°C...`);
        termostato.temperatura = temperatura;
        console.log(`✓ Temperatura actual: ${termostato.temperatura}`);
        console.log(termostato.obtenerInfo());

        hacerPregunta();
      }
    );
  };

  hacerPregunta();
}

// Ejecutar la aplicación
main();
