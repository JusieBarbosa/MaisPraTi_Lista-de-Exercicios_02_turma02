/*Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.*/

let notaAlunos = {
    aluno1: 6,
    aluno2: 8,
    aluno3: 4,
    aluno4: 5,
    aluno5: 9,
    aluno7: 7,
    aluno8: 2,
    aluno9: 10,
    aluno10: 7
}

function filtarAlunosAProvados(objeto, valor){
    let alunosAProvados = {};

    for(let key in objeto){
        if(objeto[key] >= valor){
            alunosAProvados[key] = objeto[key];
        }
    }

    return alunosAProvados
}

let result = filtarAlunosAProvados(notaAlunos,6 );

console.log(result)