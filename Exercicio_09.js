/*Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

let clientes = [
    { nome: "Ana Silva", idade: 28, cidade: "São Paulo" },
    { nome: "Bruno Costa", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carlos Pereira", idade: 42, cidade: "Belo Horizonte" },
    { nome: "Daniela Oliveira", idade: 22, cidade: "Porto Alegre" },
    { nome: "Eduardo Santos", idade: 31, cidade: "Curitiba" },
    { nome: "Fernanda Lima", idade: 27, cidade: "Salvador" },
    { nome: "Gustavo Almeida", idade: 40, cidade: "Brasília" },
    { nome: "Helena Martins", idade: 33, cidade: "Recife" }
]

let idadeMaiorQue = 0;

function vericarQuntIdade(element, valor){
    element.forEach(element => {
        if(element.idade > valor){
            idadeMaiorQue++
        }
    });
    return idadeMaiorQue;
}

let result = vericarQuntIdade(clientes, 30);

console.log(result)
