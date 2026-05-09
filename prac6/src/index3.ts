import * as readline from 'readline';

class CajaFuerte {
  private _pin: string | null = null;
  private readonly LONGITUD_PIN = 4;
  private intentosFallidos = 0;
  private readonly MAX_INTENTOS = 3;

  /**
   * Valida que el PIN tenga exactamente 4 dígitos
   */
  private validarFormatoPIN(valor: string): boolean {
    // Verificar que sea exactamente 4 caracteres
    if (valor.length !== this.LONGITUD_PIN) {
      throw new Error(
        `❌ Error de Formato: El PIN debe tener exactamente ${this.LONGITUD_PIN} dígitos. ` +
        `Ingresaste ${valor.length} caracteres.`
      );
    }

    // Verificar que todos sean dígitos
    if (!/^\d{4}$/.test(valor)) {
      throw new Error(
        `❌ Error de Formato: El PIN solo puede contener números. ` +
        `Ingresaste: "${valor}"`
      );
    }

    return true;
  }

  /**
   * Establece el PIN (con validación de formato)
   */
  set pin(valor: string) {
    this.validarFormatoPIN(valor);
    this._pin = valor;
    console.log('✓ PIN configurado correctamente (formato: ****)');
  }

  /**
   * Obtiene el PIN oculto (siempre retorna "****" por seguridad)
   */
  get pin(): string {
    if (this._pin === null) {
      return 'SIN CONFIGURAR';
    }
    return '****';
  }

  /**
   * Verifica si el PIN ingresado es correcto
   */
  verificarPIN(pinIngresado: string): boolean {
    if (this._pin === null) {
      console.log('❌ Error: El PIN no ha sido configurado aún.');
      return false;
    }

    if (pinIngresado === this._pin) {
      this.intentosFallidos = 0;
      return true;
    }

    this.intentosFallidos++;
    const intentosRestantes = this.MAX_INTENTOS - this.intentosFallidos;

    if (intentosRestantes > 0) {
      console.log(`❌ PIN incorrecto. Intentos restantes: ${intentosRestantes}`);
    } else {
      console.log(
        '🔒 ¡ALERTA! Demasiados intentos fallidos. La caja fuerte está bloqueada.'
      );
    }

    return false;
  }

  /**
   * Verifica si la caja está bloqueada
   */
  estaBloqueada(): boolean {
    return this.intentosFallidos >= this.MAX_INTENTOS;
  }

  /**
   * Reinicia los intentos (solo con PIN correcto)
   */
  reiniciarIntentos(): void {
    this.intentosFallidos = 0;
  }

  /**
   * Obtiene información del estado de la caja
   */
  obtenerInfo(): string {
    const estadoSeguridad = this.estaBloqueada()
      ? '🔒 BLOQUEADA'
      : this._pin === null
      ? '⚠️  SIN CONFIGURAR'
      : '✓ ACTIVA';

    const estadoPIN = this._pin === null ? 'No configurado' : '****';

    return `
╔═══════════════════════════════════════════╗
║         SISTEMA DE CAJA FUERTE           ║
╠═══════════════════════════════════════════╣
║ Estado:           ${estadoSeguridad.padEnd(25)}║
║ PIN:              ${estadoPIN.padEnd(25)}║
║ Intentos fallidos: ${String(this.intentosFallidos).padEnd(24)}║
║ Máximo permitido:  ${String(this.MAX_INTENTOS).padEnd(24)}║
╚═══════════════════════════════════════════╝`;
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

  const cajaFuerte = new CajaFuerte();
  let pinConfigurando = '';
  let pinConfirmacion = '';

  console.clear();
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║         SISTEMA DE SEGURIDAD - CAJA FUERTE                    ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  const mostrarMenu = () => {
    console.log('\n¿Qué deseas hacer?');
    console.log('1. Configurar PIN');
    console.log('2. Abrir caja fuerte (verificar PIN)');
    console.log('3. Ver estado');
    console.log('4. Salir\n');
  };

  const hacerPregunta = () => {
    if (cajaFuerte.estaBloqueada()) {
      console.log('\n🔒 La caja fuerte está bloqueada. No puedes realizar más acciones.\n');
      rl.close();
      return;
    }

    mostrarMenu();

    rl.question('Selecciona una opción (1-4): ', (opcion: string) => {
      switch (opcion.trim()) {
        case '1':
          if (pinConfigurando !== '') {
            // Es la confirmación
            try {
              if (pinConfirmacion !== '') {
                console.log('\n❌ Error: Ya ingresaste un PIN para confirmar.');
                hacerPregunta();
                return;
              }

              rl.question(
                'Ingresa el PIN nuevamente para confirmar (4 dígitos): ',
                (confirmacion: string) => {
                  pinConfirmacion = confirmacion.trim();

                  if (pinConfirmacion === pinConfigurando) {
                    console.log('\n✓ PINs coinciden. Configurando...');
                    try {
                      cajaFuerte.pin = pinConfirmacion;
                      console.log('\n✅ PIN configurado y verificado.');
                      console.log(`   Valor oculto: ${cajaFuerte.pin}`);
                      console.log(cajaFuerte.obtenerInfo());

                      pinConfigurando = '';
                      pinConfirmacion = '';
                      hacerPregunta();
                    } catch (error: any) {
                      console.log(error.message);
                      pinConfigurando = '';
                      pinConfirmacion = '';
                      hacerPregunta();
                    }
                  } else {
                    console.log(
                      '\n❌ Los PINs no coinciden. Intenta nuevamente.'
                    );
                    pinConfigurando = '';
                    pinConfirmacion = '';
                    hacerPregunta();
                  }
                }
              );
            } catch (error: any) {
              console.log(error.message);
              pinConfigurando = '';
              pinConfirmacion = '';
              hacerPregunta();
            }
          } else {
            // Es el primer ingreso
            rl.question(
              '\nIngresa un nuevo PIN (exactamente 4 dígitos): ',
              (pin: string) => {
                pinConfigurando = pin.trim();

                try {
                  // Validar formato solo para avisar al usuario
                  if (!/^\d{4}$/.test(pinConfigurando)) {
                    if (pinConfigurando.length !== 4) {
                      throw new Error(
                        `❌ Error de Formato: El PIN debe tener exactamente 4 dígitos. ` +
                        `Ingresaste ${pinConfigurando.length} caracteres.`
                      );
                    } else {
                      throw new Error(
                        `❌ Error de Formato: El PIN solo puede contener números.`
                      );
                    }
                  }

                  console.log(
                    '\n✓ PIN aceptado. Ahora debes confirmarlo.\n'
                  );
                  hacerPregunta();
                } catch (error: any) {
                  console.log('\n' + error.message);
                  pinConfigurando = '';
                  pinConfirmacion = '';
                  hacerPregunta();
                }
              }
            );
          }
          break;

        case '2':
          rl.question(
            '\nIngresa el PIN para abrir la caja fuerte: ',
            (pin: string) => {
              const pinIngresado = pin.trim();

              if (cajaFuerte.verificarPIN(pinIngresado)) {
                console.log('\n🔓 ¡ACCESO CONCEDIDO! La caja fuerte se ha abierto.');
                cajaFuerte.reiniciarIntentos();
              }

              console.log(cajaFuerte.obtenerInfo());
              hacerPregunta();
            }
          );
          break;

        case '3':
          console.log(cajaFuerte.obtenerInfo());
          hacerPregunta();
          break;

        case '4':
          console.log('\n👋 ¡Hasta luego! La caja fuerte está segura.\n');
          rl.close();
          return;

        default:
          console.log('❌ Opción no válida. Intenta de nuevo.');
          hacerPregunta();
      }
    });
  };

  console.log(cajaFuerte.obtenerInfo());
  hacerPregunta();
}

// Ejecutar la aplicación
main();
