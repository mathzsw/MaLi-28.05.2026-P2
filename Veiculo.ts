export = class Veiculo {
    marca:string = ""
    modelo:string = ""
    anoFab:number = 0
    potencia:number = 0
    preco:number = 0
    temSeguro:boolean = false
    cor:string = ""

    imprimirInfos() {
        console.log("Modelo: " + this.modelo
            + " Ano Fabricacao: " + this.anoFab
            + " Marca: " + this.marca
            + " Potencia: " + this.potencia
            + " Preco: " + this.preco
            + " Tem Seguro: " + this.temSeguro
            + " Cor: " + this.cor)
    }

}

