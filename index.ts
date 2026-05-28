import Veiculo = require("./Veiculo")

let kwid = new Veiculo()

kwid.modelo = "Kwid"
kwid.marca ="Renault"
kwid.potencia = 1.0
kwid.anoFab = 2015
kwid.preco = 40000
kwid.temSeguro = true
kwid.cor = "Bege"

kwid.imprimirInfos()

console.log("Modelo: " + kwid.modelo
    + " Ano Fabricacao: " + kwid.anoFab 
    + " Marca: " + kwid.marca 
    + " Potencia: " + kwid.potencia
    + " Preco: " + kwid.preco
    + " Tem Seguro: " + kwid.temSeguro
    + " Cor: " + kwid.cor)

let Hb20 = new Veiculo()
Hb20.modelo = "Hb20 S "    
Hb20.marca = "Hyundai"
Hb20.anoFab = 2022
Hb20.cor = "cinza silk"

Hb20.imprimirInfos()

console.log("Modelo: " + Hb20.modelo 
    + " Marca: " + Hb20.marca
    + " Ano de Fabricação: " + Hb20.anoFab
    + " Cor: " + Hb20.cor)