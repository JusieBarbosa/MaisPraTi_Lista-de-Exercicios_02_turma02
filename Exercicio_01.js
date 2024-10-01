/*Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

let carro = { 
    marca : "Ford",
    modelo: "Focus",
    ano: 2015,
    cor: "Prata"
}

function mostrarPropriedades(objeto){
    for(let key in objeto){
        console.log(`${key}: ${objeto[key]}`)
    }
}

mostrarPropriedades(carro)