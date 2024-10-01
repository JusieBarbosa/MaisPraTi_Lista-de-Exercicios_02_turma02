/*Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/

let filmes = [
    {
        titulo: "Tropa de Elite",
        diretor: "Jose Padilha",
        anoDeLancamento: 2007
    },
    {
        titulo: "Missão Impossível",
        diretor: "Jhon Woo",
        anoDeLancamento: 1996
    },
    {
        titulo: "Velozes e Furiozos",
        diretor:"Vin Diesel",
        anoDeLancamento: 2001
    },
    {
        titulo: "Matrix",
        diretor:"Lana Wachowski e Lilly Wachowski",
        anoDeLancamento: 1999
    }
]

let titulosFilmes = []

function mostrarTitulos(array){
    array.forEach(array => {
        titulosFilmes.push(array.titulo)
    });
    return titulosFilmes
}

let result = mostrarTitulos(filmes);

console.log(result)