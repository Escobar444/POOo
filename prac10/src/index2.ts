// Contrato base mediante Interfaz
interface IBeca {
    aplicarDescuento(monto: number): number;
}

// Implementaciones que extienden el sistema sin modificar la lógica central
class BecaParcial implements IBeca {
    aplicarDescuento(monto: number): number { return monto * 0.25; }
}

class BecaCompleta implements IBeca {
    aplicarDescuento(monto: number): number { return monto * 1.00; }
}

class BecaArtistica implements IBeca {
    aplicarDescuento(monto: number): number { return monto * 0.50; } }

// Clase procesadora: Cerrada a modificación
class CalculadoraPagos {
    procesar(montoBase: number, beneficio: IBeca): void {
        const descuento = beneficio.aplicarDescuento(montoBase);
        const total = montoBase - descuento;
        console.log(`Monto Original: $${montoBase} | Total con Beca: $${total}`);
    }
}

// Implementación funcional
const pago = new CalculadoraPagos();
pago.procesar(500, new BecaParcial()); // Salida: Total con Beca: $375
pago.procesar(500, new BecaCompleta()); // Salida: Total con Beca: $0
pago.procesar(500, new BecaArtistica()); // Salida: Total con Beca: $250
