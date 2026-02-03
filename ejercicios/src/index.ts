class GYM {
    peso: number;
    estatura: number;

    constructor(peso: number, estatura: number) {
        this.peso = peso;
        this.estatura = estatura;
    }

   public IMC(): void {
    let estado;
        let IMC = this.peso / (this.estatura * this.estatura);
      
//interpretación del IMC
        if (IMC < 18.5) {
            estado= "Bajo peso";
        } else if (IMC >= 18.5 && IMC < 24.9) {
            estado = "Normal";
        } else if (IMC >= 25 && IMC < 29.9) {
            estado = "Sobrepeso";
        } else if (IMC >= 30) {
            estado = "Obesidad";
        } 
  console.log("El índice de masa corporal es: " + IMC + " y su estado es: " + estado);
   }
}


let cliente = new GYM(105, 1.76);
cliente.IMC();


///////
/*Un ing. Eléctrico solicita un programa que calcule conversiones de temperatura para el airea de refrigeración donde se trabaja con instalación y mantenimiento de aire acondicionados. El cliente solicita que el usuario coloque la temperatura y la escala y permita hacer diferentes conversiones como
Fahrenheit – Celsius.
Celsius – Fahrenheit.
Kelvin – Fahrenheit.
Kelvin – Celsius. */

class convTemp {
    temperatura: number;

    constructor(temperatura: number) {
        this.temperatura = temperatura;
    }
public FaC(): void {
 let celsius = (this.temperatura - 32) * 5/9;
 console.log("La temperatura en Celsius es: " + celsius);
}
public CaF(): void {
 let fahrenheit = (this.temperatura * 9/5) + 32;
 console.log("La temperatura en Fahrenheit es: " + fahrenheit);
}
public KaF(): void {
 let fahrenheit = (this.temperatura - 273.15) * 1.8 + 32;
 console.log("La temperatura en Fahrenheit es: " + fahrenheit);
}
public KaC(): void {
 let celsius = this.temperatura - 273.15;
 console.log("La temperatura en Celsius es: " + celsius);
}

}

let aire = new convTemp(100);
aire.FaC();
aire.CaF();
aire.KaC();
aire.KaF();


/*Se solicita configurar un programa que según las siguientes faltas se imponga una sanción económica dentro de una institución estudiantil privada.
•
Llegada tardía $1.
•
Caminar por los pasillos en horas de clase $3.
•
No andar vestimenta apropiada $5.
•
No hacer uso adecuado de las instalaciones $10.
•
Si el estudiante comete una infracción mostrar un mensaje con el nombre y la infracción más el total que le corresponde cancelar */

class infracción {
    faltas: number;

    constructor(faltas: number) {
        this.faltas = faltas;
    }


    public seleccion(): void {

        if (this.faltas == 1) {
            console.log("Llegada tardía, sanción: $1");
        } else if (this.faltas == 2) {
            console.log("Caminar por los pasillos en horas de clase, sanción: $3");
        } else if (this.faltas == 3) {
            console.log("No andar vestimenta apropiada, sanción: $5");
        } else if (this.faltas == 4) {
            console.log("No hacer uso adecuado de las instalaciones, sanción: $10");
        }
    }

}
let estudiante = new infracción(3);
estudiante.seleccion();