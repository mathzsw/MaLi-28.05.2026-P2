"use strict";
module.exports = class Veiculo {
    marca = "";
    modelo = "";
    anoFab = 0;
    potencia = 0;
    preco = 0;
    temSeguro = false;
    cor = "";
    imprimirInfos() {
        console.log("Modelo: " + this.modelo
            + " Ano Fabricacao: " + this.anoFab
            + " Marca: " + this.marca
            + " Potencia: " + this.potencia
            + " Preco: " + this.preco
            + " Tem Seguro: " + this.temSeguro
            + " Cor: " + this.cor);
    }
};
//# sourceMappingURL=Veiculo.js.map