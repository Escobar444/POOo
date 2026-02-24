import * as readline from 'readline';
/*class programa {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar(): void {
        this.pedirNumero();
    }
    pedirNumero(): void {
        this.rl.question('Ingrese un numero:', (respuesta: string) => {
            const numero = Number(respuesta);
            this.evaluarParoinpar(numero);
            this.cerrar();
        });
    }
    evaluarParoinpar(num: number): void {
      if(num % 2){
        console.log('El numero es impar');
      }else{
        console.log('El numero es par');
      }
}
    cerrar(): void {
    this.rl.close();
    }
}
const app = new programa();
app.iniciar(); */

/*Desarrollar una aplicación en consola que permita ingresar la nota de un
estudiante y determinar su estado académico.
Usar if / else if para clasificar:
• 9 – 10 = Excelente
• 7 – 8.9 = Bueno
• 6 – 6.9 = Regular
• Menor a 6 = Reprobado */

/*class programa2 {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar(): void {
        this.pedirNota();
    }
    pedirNota(): void {
        this.rl.question('Ingrese la nota del estudiante:', (respuesta: string) => {
            const nota = respuesta;
            this.evaluarNota(nota);
            this.cerrar();
        });
    }
    evaluarNota(nota: string): void {
        if (parseFloat(nota) >= 9 && parseFloat(nota) <= 10) {
            console.log('Excelente');
        } else if (parseFloat(nota) >= 7 && parseFloat(nota) <= 8.9) {
            console.log('Bueno');
        } else if (parseFloat(nota) >= 6 && parseFloat(nota) <= 6.9) {
            console.log('Regular');
        } else {
            console.log('Reprobado');
        }
}
    cerrar(): void {
    this.rl.close();
    }
}
const app2 = new programa2();
app2.iniciar(); */

/*Desarrollar un sistema de autenticación que valide usuario, contraseña.
Si el login es correcto, mostrar el rol al que pertenece el usuario:
• 1 = Administrador
• 2 = Cliente
• 3 =1 Invitado
Si el usuario no existe, mostrar mensaje de usuario incorrecto.
*/

class programa3 {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar(): void {
        this.pedirLogin();
    }
    pedirLogin(): void {
        this.rl.question('Ingrese su usuario:', (usuario: string) => {
            this.rl.question('Ingrese su contraseña:', (contraseña: string) => {
                const rol = this.validarLogin(usuario, contraseña);
                this.mostrarRol(rol);
                this.cerrar();
            });
        });
    }
    validarLogin(usuario: string, contraseña: string): number {
        const usuarios = [
            { usuario: 'admin', contraseña: 'admin123', rol: 1 },
            { usuario: 'cliente', contraseña: 'cliente123', rol: 2 },
            { usuario: 'invitado', contraseña: 'invitado123', rol: 3 }
        ];
        const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);
        if (usuarioEncontrado) {
            return usuarioEncontrado.rol;
        } else {
            return 0;
        }
    }
    mostrarRol(rol: number): void {
        switch (rol) {
                case 1:
                    console.log('Bienvenido Administrador');
                    break; 
                case 2:
                    console.log('Bienvenido Cliente');
                    break;
                case 3:
                    console.log('Bienvenido Invitado');
                    break;
                default:
                    console.log('Usuario incorrecto');
            }
        } 
        cerrar(): void {
            this.rl.close();
        }
}
const app3 = new programa3();
app3.iniciar();