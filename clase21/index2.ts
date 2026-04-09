abstract class jugador {
    nickname: string;
    private vida: number
    constructor(nickname:string,vida:number){
        this.nickname = nickname;
        this.vida = vida
    }
    get nuevaVida():number{
    return this.vida
}
set NuevaVida (valor: number){
    if(valor = 100)
        this.vida= valor
    this.vida = valor;
}
mostrar():void{
    console.log("vida: " + this.vida)
}
}


class mundo1 extends jugador {
    
    constructor(nickname: string, vida: number){
        super(nickname,vida)
      
    }
aventura(): void{
    
    let vidaNueva = this.nuevaVida - 30
    console.log("la nueva vida es: " + vidaNueva);
    this.VidaRestante(vidaNueva);
}
VidaRestante(vidaNueva: number): void{
    let Restante = vidaNueva 
    console.log("su vida es:" + Restante);
    

}
acuatico(): void{
    let vidaNueva = this.nuevaVida - 50
    console.log("la nueva vida es:" + vidaNueva);
    let SumaVida = vidaNueva + 10
    console.log("la nueva vida es: " + SumaVida);
}


Endgame(): void {
  let vidaNueva = this.nuevaVida - 50
    console.log("la nueva vida es:" + vidaNueva);
}
}

let mundo = new mundo1("juan",100)
mundo.aventura();
mundo.acuatico();
mundo.Endgame();

