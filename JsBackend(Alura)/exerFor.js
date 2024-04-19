// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const arrayLength = ['banana', 'pera','mamão','kiwi']

for(let fruta of arrayLength){
    console.log(fruta)
}
// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const array = ['t', 'a','t','a'];
for(let i in array)
{
    console.log(`Índice ${i}, elemento ${array[i]}`)
}
// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
 const num = [23,43,64,12,54,12];
let soma = 0;
 for(let numero of num)
 {
    soma += numero
 }
 console.log(soma)
// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const number = [23,43,64,12,54,12];
let maior = '';
let menor = '';
 for(let numero of number)
 {
    if(numero > maior)
    {
        maior = numero
    }else if(numero < menor)
    {
        menor = numero
    }
 }
console.log(`o menor número é ${menor} e o maior número é ${maior}`)
// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let numeru of numeros)
{
    if(numeru % 2 == 0){
        console.log(numeru)
    }
}
// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const numeross = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let somas = 0;
for (let notas of numeross)
{
    somas += notas
}
let media = somas / numeross.length
console.log(`A soma é de: ${somas} e a média: ${media}`)