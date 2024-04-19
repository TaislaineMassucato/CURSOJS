const number = [1,2,3,4,5,6,7];
let soma = 0 ; 
for(let i = 0; i < number.length; i++)
{
    console.log(`índice: ${i} número: ${number[i]}`);
    soma += number[i];
}
let media = soma / number.length
console.log(`média dos números é de: ${media}`)

//Decremento
const nu = [500,600,700,800];
     //3 (4posi,indcomeça0)
for (let i= nu.length - 1; i >= 0; i--){
    console.log(nu[i])
}

//decremento 2 em 2 
const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(`decremento em 2 :${numeros[i]}`);
}

//numeros pares
const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);

