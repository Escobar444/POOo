//sistema de gestion de suscripciones 
class usuario {
    constructor(
        public username: string,
         public email: string,
        public planActual: string )
        {}
}

interface ISuscripción {
    obtenerosto(): number;
    obtenerBeneficios(): string;
}

class PlanBasico implements ISuscripción {
    obtenerosto(): number {
        return  5.00;
    }
    obtenerBeneficios(): string {
        return "Acceso a 1 instancia de servidor"
    }
}
class PlanPremium implements ISuscripción {
    obtenerosto(): number {
        return 12.00;
    }
    obtenerBeneficios(): string {
        return "Acceso a 5 instancias de servidor y soporte 24/7"
    }
}

class PlanEnterprise implements ISuscripción {
    obtenerosto(): number {
        return 50.00;
    }
    obtenerBeneficios(): string {
        return "Infraestructura dedicada + API ilimitada"
    }
}

interface INotificacion {
    enviar(usuario: usuario, mensaje: string): void 
}

class NotificacionEmail implements INotificacion {
    enviar(usuario: usuario, mensaje: string): void {
        console.log(`[EMAIL] enviando a ${usuario.email}`);
        console.log(`Mensaje: ${mensaje}/n`);
    }
}
class NotificacionWhatsapp implements INotificacion {
    enviar(usuario: usuario, mensaje: string): void {
        console.log(`[WHATSAPP] enviando a ${usuario.username} (WhatsApp)`);
        console.log(`Mensaje: ${mensaje}/n`);
    }
}

class NotificacionSMS implements INotificacion {
    enviar(usuario: usuario, mensaje: string): void {
        console.log(`[SMS] enviando a ${usuario.username} (SMS)`);
        console.log(`Mensaje: ${mensaje}/n`);
    }
}


class ProcesarSuscripciones {
    constructor(
        private notificador: INotificacion
    ) {}

    procesarPago(usuario: usuario, plan: ISuscripción) {
        const costo = plan.obtenerosto();
        const beneficios = plan.obtenerBeneficios();

        console.log("----------------------");
        console.log("facturación de servicios en la nube");
        console.log("--------------------");
        console.log("cliente:", usuario.username);
        console.log("email:", usuario.email);
        console.log("plan:", usuario.planActual);
        console.log("costo: $", costo.toFixed(2));
        console.log("beneficios:", beneficios);

        const MensajeConfirmacion = `confirmacion: su pago de ${costo.toFixed(2)} ha sido procesado. Plan activo: ${beneficios}`
        this.notificador.enviar(usuario, MensajeConfirmacion);
    }
}
// crear usuario 
const cliente = new usuario("josue", "josue@example.com", "Premium");
// definir plan
const planElegido = new PlanPremium();
// definir notificador
const medioNotificacion = new NotificacionEmail();

const sistema = new ProcesarSuscripciones(medioNotificacion);
sistema.procesarPago(cliente, planElegido);



