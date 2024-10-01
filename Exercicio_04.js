/*Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.*/

let pessoas = [{
    nome:"Tony Stark",
    idade:45,
    cidade: "Nova York"
},
{
    nome: "Bruce Wayne",
    idade: 35,
    cidade: "Gotham"
},
{
    nome: "Seya",
    idade: 18,
    cidade:"Bahia"
}
]

for(let pessoa of pessoas){
    console.log(pessoa)
}