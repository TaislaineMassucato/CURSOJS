// A primeira coisa que temos que fazer é criar uma função que recebe como argumento o nome de um estudante. A função deve ser criada de uma forma que consiga receber qualquer nome de estudante e responder de acordo.

// Esta função terá que verificar se a pessoa estudante recebida como argumento faz parte ou não de uma lista de estudantes, que vamos prover.

// Se tizer, deve retornar a média correspondente do estudante, que vamos obter na lista de médias. Estamos trabalhando com a lista de estudantes e com a lista de médias que utilizamos anteriormente.

// Caso o nome não esteja na lista, temos que retornar uma mensagem indicando que a pessoa estudante não foi encontrada.
let notas = [10, 5, 6, 8];
let nomes = ['julia', 'vanessa','taislaine','thalia'];

let lista = [notas , nomes];

function ExibirNomeNotaAluno(nome)
{
    if(lista[1].includes(nome))
    {
        //pegando índice do nome encontrado
        const indiceNome = lista[1].indexOf(nome);
        //encontrando a nota, referente ao índice do nome
        const Nota = lista[0][indiceNome];

        console.log(`${lista[1][indiceNome]} tem nota ${Nota}`);
    }else{
        console.log(`Estudante não encontrada`)
    }
}
ExibirNomeNotaAluno(`karla`)