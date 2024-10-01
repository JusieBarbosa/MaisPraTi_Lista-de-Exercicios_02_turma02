/*Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.*/

let carrinho = {
    itens: [
      { nome: "Arroz", quantidade: 2, precoUnitario: 5.50 },
      { nome: "Feijão", quantidade: 1, precoUnitario: 4.00 },
      { nome: "Açúcar", quantidade: 3, precoUnitario: 3.00 },
      { nome: "Sal", quantidade: 1, precoUnitario: 1.50 },
      { nome: "Óleo", quantidade: 2, precoUnitario: 6.00 },
      { nome: "Macarrão", quantidade: 5, precoUnitario: 2.50 },
      { nome: "Leite", quantidade: 2, precoUnitario: 3.20 },
      { nome: "Café", quantidade: 1, precoUnitario: 10.00 },
    ]
}



function totalizarValorCarinho(elements){
    let totalCarValue = 0;
    elements.forEach(element => {
        totalCarValue += (element.quantidade * element.precoUnitario)
    });
    return totalCarValue;
}


let result = totalizarValorCarinho(carrinho.itens);

console.log(`O total de de compras no carinho é de R$${result}`)