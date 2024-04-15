// Crie uma lista com os seguintes nomes de estudantes: 
// 'João', 'Juliana', 'Caio', 'Ana'
// Crie uma lista com as seguintes médias: 
// 10, 8, 7.5, 9 
// Crie uma lista que contém as duas listas acima.

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista =[alunos,medias]

console.log(lista)

//acessar Caio e sua média, dentro de lista..

console.log(`${lista[0][2]} tem a média : ${lista[1][2]}`)
