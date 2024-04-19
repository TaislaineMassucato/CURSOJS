const notas = [5.5, 6.5, 10, 9.5];

//somar 1 a cada nota
const notaAtualizada = notas.map((nota) => nota + 1 >= 11 ? 10 : nota + 1 )
console.log(notaAtualizada)

//colocar todos nomes em letra MAIUSCULA
let nomes = ['julia', 'vanessa','taislaine','thalia']
let atua= nomes.map((nome)=>nome.toUpperCase())
console.log(atua);

//Mutiplicar por 10 cada valor usando CALLBACKS(função chama funcao parametro)
const arrayNums = [1, 2, 3, 4];

var mult = arrayNums.map(dez)
console.log(mult)

function dez(num)
{
    return num * 10 
}

