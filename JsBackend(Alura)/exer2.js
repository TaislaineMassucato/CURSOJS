// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let sal = 1200;
let dep = 200;
let saq = 50;
let operacao = (sal + dep) - saq
console.log(operacao)

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
let n = 15;
console.log( n % 2 == 0 ? 'par' : 'ímpar')

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
let usu = 'tay'
let log = true;
let adm = true;

if(log===true && adm===false)
{
    console.log(`${usu} está logado e é adm`)
}else
{
    console.log(`${usu} não está logado ou não é adm`)
}

// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
let _1 = true;
let _2 = false;
 if(_1 === true || _2===false)
 {
    console.log('1 é verdadeira') 
 }else{
    console.log('nenhuma é verdadeira')
 }

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
let idade = 18;
let max = 18;

if (idade < 18){
    console.log('sem idade suficiente')
}else{
    console.log('Comprado!!Bom show')
}