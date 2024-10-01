/*Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.*/

let alunos = [
    {
        nome: "Anderson",
        nota1: 5,
        nota2: 9
    },
    {
        nome: "Raquel",
        nota1: 9,
        nota2: 3
    },
    {
        nome: "Lula",
        nota1: 5,
        nota2: 4
    },

]

function calcularNotas(array){
    for(let aluno of array){
        let media = (aluno.nota1 + aluno.nota2) /2;
        console.log(`Aluno ${aluno.nome} obeteve média ${media}`);
    }
}

calcularNotas(alunos)