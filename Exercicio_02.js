/*Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto */

let livro = {
    titulo: "O monge e o executivo",
    autor: "Jmaes C. Hunter",
    ano: 1989,
    genero: "Auto Ajuda"
}

let existePropriedade = false

function verificarEditora(objeto){
    for( let key in objeto){
    if(key !== "editora"){
        objeto.editora = "Sextante"
        }
        else {
            break;
        }
    }
}

console.log(livro)
verificarEditora(livro);
console.log(livro)