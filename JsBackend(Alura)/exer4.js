// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
  var nome = (nome) => `Olá ${nome}`

  console.log(nome('taislaine'))

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function idade(id)
{
    if(id >=18){
        return 'maior de idade'
    }else{
        return 'menor de idade'
    }
}
console.log(idade(16))
// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
function verificaPalindromo(string) 
{
                                   //dividi //inverte  //junta
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("AmoraRoma")); // true
console.log(verificaPalindromo("Frase")); // false

// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

function encontraMaiorValor(num1, num2, num3) {
    let maior = num1; // Assumindo inicialmente que num1 é o maior
  
    if (num2 > maior) {
        maior = num2;
    }
  
    if (num3 > maior) {
        maior = num3;
    }
  
    return maior;
  }
  
  console.log(encontraMaiorValor(12, 56, 32)); // 56

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
var calculaPotencia = (base,expoente) => base**expoente

console.log(calculaPotencia(2,3))