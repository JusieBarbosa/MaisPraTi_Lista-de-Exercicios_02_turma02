/*Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

let empresa = {
    departamentos: [
      {
        nome: "Recursos Humanos",
        funcionarios: ["Ana", "Bruno", "Carla"]
      },
      {
        nome: "Tecnologia",
        funcionarios: ["David", "Elisa", "Fernando"]
      },
      {
        nome: "Vendas",
        funcionarios: ["Gustavo", "Helena", "Isabela"]
      },
      {
        nome: "Marketing",
        funcionarios: ["João", "Karina", "Leonardo"]
      }
    ]
  }

function exibirFuncionario(elements){
    for(let i in empresa.departamentos){
        let departamento = empresa.departamentos[i]
        console.log(`Departament ${departamento.nome}`);

        for(let funcionario of departamento.funcionarios){
            console.log(` - Funcionário:  ${funcionario}`)
        }
    }
}

exibirFuncionario(empresa)