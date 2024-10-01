/*Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

let estoque = [
    { produto: "Notebook", quantidade: 5, minimo: 10 },
    { produto: "Celular", quantidade: 12, minimo: 15 },
    { produto: "Tablet", quantidade: 3, minimo: 5 },
    { produto: "Fone de Ouvido", quantidade: 8, minimo: 10 },
    { produto: "Monitor", quantidade: 4, minimo: 6 },
    { produto: "Teclado", quantidade: 10, minimo: 10 },
    { produto: "Mouse", quantidade: 2, minimo: 3 },
    { produto: "Impressora", quantidade: 1, minimo: 2 }
]

function duplicarEstoqueMinimo(element){
    element.forEach(element => {
        if(element.quantidade < element.minimo){
            element.quantidade *= 2;

        }
    });
    return estoque;
}

let result = duplicarEstoqueMinimo(estoque);

console.log(result)