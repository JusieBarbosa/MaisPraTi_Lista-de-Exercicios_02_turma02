/*Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

let pedidos = [
    { cliente: "Ana Silva", produto: "Notebook", quantidade: 1 },
    { cliente: "Bruno Costa", produto: "Celular", quantidade: 2 },
    { cliente: "Carlos Pereira", produto: "Tablet", quantidade: 3 },
    { cliente: "Daniela Oliveira", produto: "Fone de Ouvido", quantidade: 5 },
    { cliente: "Eduardo Santos", produto: "Monitor", quantidade: 1 },
    { cliente: "Fernanda Lima", produto: "Teclado", quantidade: 4 },
    { cliente: "Gustavo Almeida", produto: "Mouse", quantidade: 6 },
    { cliente: "Helena Martins", produto: "Impressora", quantidade: 1 },
    { cliente: "Isabela Rocha", produto: "Smart TV", quantidade: 2 },
    { cliente: "João Mendes", produto: "Câmera Digital", quantidade: 3 }
]

let quntProdutosPorCliente = {};

function totalizarQuntPdClientes(element){
    element.forEach(element => {
        const client = element.cliente;
        const amount = element.quantidade

        if(quntProdutosPorCliente[client]){
            quntProdutosPorCliente[client] += amount
        }
        else{
            quntProdutosPorCliente[client] = amount
        }

    });

    return quntProdutosPorCliente;
}

let result = totalizarQuntPdClientes(pedidos);

console.log(result)