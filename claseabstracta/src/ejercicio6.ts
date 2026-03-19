/*Ejercicio 6 Sistema de Notificaciones
Crear una clase abstracta Notificación con el método enviar(). El sistema debe permitir
enviar notificaciones por Email, SMS o WhatsApp. Cada clase implementará su forma de
envío. */

abstract class Notificacion {
    mensaje: string;
    constructor(mensaje: string) {
        this.mensaje = mensaje;
    }
    abstract enviar(): void;
}

class NotificacionEmail extends Notificacion {
    enviar(): void {
        console.log('Enviando notificación por Email: ' + this.mensaje);
    }
}

class NotificacionSMS extends Notificacion {
    enviar(): void {
        console.log('Enviando notificación por SMS: ' + this.mensaje);
    }
}

class NotificacionWhatsApp extends Notificacion {
    enviar(): void {
        console.log('Enviando notificación por WhatsApp: ' + this.mensaje);
    }
}

const notificacionEmail = new NotificacionEmail('Tienes un nuevo mensaje en tu correo');
notificacionEmail.enviar();
const notificacionSMS = new NotificacionSMS('Tienes un nuevo mensaje en tu teléfono');
notificacionSMS.enviar();
const notificacionWhatsApp = new NotificacionWhatsApp('Tienes un nuevo mensaje en tu WhatsApp');
notificacionWhatsApp.enviar();

