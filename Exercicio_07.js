/*Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

let products = [
    {
        name: "cookie",
        price: 4.50,
        discount: 0
    },
    {
        name: "rice",
        price: 8.90,
        discount: 0
    },
    {
        name: "pizza",
        price: 59.90,
        discount: 0
    },
    {
        name: "water",
        price: 5.00,
        discount: 0
    }
]

function aplicarDescount(products){
    products.forEach(products => {
        products.descount = products.price * 0.10;
        let newPrice = products.price - products.descount;
        console.log(`O ${products.name} que custa R$${products.price} ganho um desconto e agora está por R$${newPrice.toFixed(2)}`)
    });
}

aplicarDescount(products)