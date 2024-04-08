 var array = [3,5,7,4,5];

//  console.log(array)
// for(var i = 0 ; i<array.length; i++)
// {
//     console.log(`O indice ${i} tem o valor ${array[i]}`);
// }

//forma mais simples para variaveis compostas ou objetos

for(let pos in array){
    console.log(array[pos])
}


console.log(`o valor 7 está na posição ${array.indexOf(7)}`)
// console.log(`Nosso vetor é ${array}`);
// console.log(`Nosso vetor tem ${array.length} posicão`);
// console.log(`cria indice(q nao existe) 5, elemento atribuido 6 ${array[5] = 6} `);
// console.log(`addElement 8 , criando um novo indice 6(q nao existe) ${array.push(8)} `);
// console.log(`Organiza os elementos dentro array em crescente ${array.sort()} `);
