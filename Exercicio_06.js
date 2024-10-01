/*Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

let funcionarios = [
    {
        nome: "Lula",
        cargo: "Presidente",
        salario: 35000
    },
    {
        nome:"Elon Musk",
        cargo:"Proprietário",
        salario: 80000000
    },
    {
        nome:"Bill Gates",
        cargo: "Desenvolvedor",
        salario: 10000
    },
    {
        nome:"Deolane",
        cargo:"Influnecer",
        salario: 5000000
    },
    {
        nome: "Alexandre de Moraes",
        cargo: "Juiz",
        salario: 2000000
    }
]

function filtarSalario(array, valor){
    for(let funcionario of array){
        if(funcionario.salario >= valor){
            console.log(funcionario)
        }
    }
}

filtarSalario(funcionarios, 100000)