"use strict";
/*Ejercicio 6 Sistema de Notificaciones
Crear una clase abstracta Notificación con el método enviar(). El sistema debe permitir
enviar notificaciones por Email, SMS o WhatsApp. Cada clase implementará su forma de
envío. */
Object.defineProperty(exports, "__esModule", { value: true });
class Notificacion {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
}
class NotificacionEmail extends Notificacion {
    enviar() {
        console.log('Enviando notificación por Email: ' + this.mensaje);
    }
}
class NotificacionSMS extends Notificacion {
    enviar() {
        console.log('Enviando notificación por SMS: ' + this.mensaje);
    }
}
class NotificacionWhatsApp extends Notificacion {
    enviar() {
        console.log('Enviando notificación por WhatsApp: ' + this.mensaje);
    }
}
const notificacionEmail = new NotificacionEmail('Tienes un nuevo mensaje en tu correo');
notificacionEmail.enviar();
const notificacionSMS = new NotificacionSMS('Tienes un nuevo mensaje en tu teléfono');
notificacionSMS.enviar();
const notificacionWhatsApp = new NotificacionWhatsApp('Tienes un nuevo mensaje en tu WhatsApp');
notificacionWhatsApp.enviar();
//# sourceMappingURL=ejercicio6.js.map