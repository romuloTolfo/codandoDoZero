const alunos = ['joao', 'juliana', 'caio', 'ana']

const mediaDosalunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosalunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
      let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ',sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "aluno nao esta cadastrado"
    }
}

console.log(exibeNomeNota("romulo"))