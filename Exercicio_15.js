/*15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.*/


let transacoes = [
    { tipo: "entrada", valor: 1500 },
    { tipo: "saida", valor: 200 },
    { tipo: "entrada", valor: 750 },
    { tipo: "saida", valor: 100 },
    { tipo: "entrada", valor: 2000 },
    { tipo: "saida", valor: 500 },
    { tipo: "entrada", valor: 300 },
    { tipo: "saida", valor: 1000 }
]



function calcularSaldo(elements){
    let valoresEntrada = 0
    let valoressSaida = 0
    elements.forEach(element => {
        if(element.tipo === "entrada"){
            valoresEntrada +=  element.valor
        } else if(element.tipo ==="saida" ){
            valoressSaida += element.valor
        }
    });
    let saldoTotal = valoresEntrada - valoressSaida
    return saldoTotal;
};

let result = calcularSaldo(transacoes);

console.log(`O Seu saldo atua é de R$${result}`)
