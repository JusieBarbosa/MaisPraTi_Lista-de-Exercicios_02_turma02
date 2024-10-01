/*Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/

let vendas = [
    { produto: "Notebook", quantidade: 2, valor: 3500 },
    { produto: "Celular", quantidade: 5, valor: 1500 },
    { produto: "Tablet", quantidade: 3, valor: 1200 },
    { produto: "Fone de Ouvido", quantidade: 10, valor: 200 },
    { produto: "Monitor", quantidade: 4, valor: 800 },
    { produto: "Teclado", quantidade: 6, valor: 150 },
    { produto: "Mouse", quantidade: 8, valor: 100 },
    { produto: "Impressora", quantidade: 1, valor: 600 }
]

let valorTotalDeVendas = 0;

function calcularValorTotalDeVendas(element){
    element.forEach(element => {
        valorTotalDeVendas += element.valor
    });
    return valorTotalDeVendas;
}

let result = calcularValorTotalDeVendas(vendas);

console.log(result)