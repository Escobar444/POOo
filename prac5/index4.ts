/**
 * Ejercicio 4: Preparación de Pedidos
 * Mostrar los pasos de cocina para diferentes platos de un menú
 */

// Clase abstracta base
abstract class Pedido {
  protected nombre: string;
  protected pasos: string[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.pasos = [];
  }

  // Método abstracto que debe implementarse en las subclases
  abstract preparar(): void;

  // Método para mostrar el nombre del pedido
  getNombre(): string {
    return this.nombre;
  }

  // Método para obtener los pasos
  getPasos(): string[] {
    return this.pasos;
  }

  // Método para mostrar la preparación paso a paso
  mostrarPreparacion(): void {
    console.log(`\n${"=".repeat(50)}`);
    console.log(` PREPARANDO: ${this.nombre.toUpperCase()}`);
    console.log(`${"=".repeat(50)}`);

    this.preparar();

    console.log(`\n ${this.nombre} completamente preparada!`);
    console.log(`${"=".repeat(50)}\n`);
  }

  // Método para listar los pasos
  listarPasos(): void {
    console.log(`\n Pasos para preparar ${this.nombre}:`);
    this.pasos.forEach((paso, index) => {
      console.log(`   ${index + 1}. ${paso}`);
    });
  }
}

// Implementación: Hamburguesa
class Hamburguesa extends Pedido {
  constructor() {
    super("Hamburguesa");
  }

  preparar(): void {
    const pasos = [
      " Calentar la parrilla a fuego medio-alto",
      " Sacar la carne molida de la nevera",
      " Formar la hamburguesa (sin apretar demasiado)",
      " Sazonar con sal y pimienta",
      " Cocinar la carne 3-4 minutos por lado",
      " Añadir queso en los últimos 30 segundos",
      " Preparar los ingredientes (lechuga, tomate, cebolla)",
      " Tostar ligeramente el pan",
      " Extender mayonesa en el pan",
      " Armar la hamburguesa: pan, lechuga, tomate, carne con queso, cebolla, pan",
      " Cortar por la mitad en diagonal",
    ];

    pasos.forEach((paso, index) => {
      setTimeout(() => {
        console.log(`   Paso ${index + 1}: ${paso}`);
      }, index * 300);
    });

    this.pasos = pasos;
  }
}

// Implementación: Pizza
class Pizza extends Pedido {
  constructor() {
    super("Pizza");
  }

  preparar(): void {
    const pasos = [
      " Precalentar el horno a 220°C",
      " Extender la masa sobre la bandeja",
      " Dar forma circular a la masa",
      " Esparcir salsa de tomate sobre la masa",
      " Distribuir ajo picado",
      " Añadir cebolla en rodajas",
      " Poner champiñones (si lo desea)",
      " Rociar aceite de oliva",
      " Esparcir queso mozzarella uniformemente",
      " Añadir orégano al gusto",
      " Hornear durante 15-20 minutos hasta que la masa esté dorada",
      " Verificar que el queso esté derretido y burbujeante",
      " Sacar del horno con cuidado",
      " Dejar reposar 2 minutos antes de cortar",
      " Cortar en 8 porciones triangulares",
    ];

    pasos.forEach((paso, index) => {
      setTimeout(() => {
        console.log(`   Paso ${index + 1}: ${paso}`);
      }, index * 300);
    });

    this.pasos = pasos;
  }
}

// Menú del restaurante
class Menu {
  private pedidos: Map<string, Pedido>;

  constructor() {
    this.pedidos = new Map();
    this.registrarPedidos();
  }

  private registrarPedidos(): void {
    this.pedidos.set("hamburguesa", new Hamburguesa());
    this.pedidos.set("pizza", new Pizza());
  }

  mostrarMenu(): void {
    console.log("\n" + "=".repeat(50));
    console.log(" BIENVENIDO A NUESTRO RESTAURANTE ");
    console.log("=".repeat(50));
    console.log("\n MENÚ DISPONIBLE:\n");

    this.pedidos.forEach((_, tipo) => {
      console.log(`   • ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`);
    });

    console.log("\n" + "=".repeat(50) + "\n");
  }

  preparar(tipo: string): void {
    const pedido = this.pedidos.get(tipo.toLowerCase());

    if (pedido) {
      pedido.mostrarPreparacion();
    } else {
      console.log(
        `\n Pedido no disponible: ${tipo}\nOpciones: hamburguesa, pizza\n`
      );
    }
  }

  listarDetalles(tipo: string): void {
    const pedido = this.pedidos.get(tipo.toLowerCase());

    if (pedido) {
      pedido.listarPasos();
    } else {
      console.log(`\n Pedido no encontrado: ${tipo}\n`);
    }
  }
}

// ========== EJEMPLO DE USO ==========
const menu = new Menu();

// Mostrar el menú
menu.mostrarMenu();

// Ejemplo 1: Preparar una Hamburguesa
console.log(" Cliente 1: Me gustaría una hamburguesa, por favor.\n");
menu.preparar("hamburguesa");

// Esperar un tiempo y luego preparar la pizza
setTimeout(() => {
  // Ejemplo 2: Preparar una Pizza
  console.log(" Cliente 2: Me gustaría una pizza, por favor.\n");
  menu.preparar("pizza");

  // Esperar a que terminen todas las operaciones
  setTimeout(() => {
    // Mostrar detalles de un pedido
    console.log("\n Información detallada de pedidos:\n");
    menu.listarDetalles("hamburguesa");
    menu.listarDetalles("pizza");

    console.log("\n ¡Gracias por su visita!");
  }, 5000);
}, 5000);
