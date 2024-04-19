const Pessoa = {
    name:'taislaine',
    age: 25
};

//Acessar propriedade do obj normalmente
const nomee = Pessoa.name
console.log(nomee)

//Desestruturando obj, passando para var a propriedade em si
const { age } = Pessoa
console.log(age)
//Dando nome a propriedade escolhida
const { name: nome } = Pessoa
console.log(nome)

//Passando variavel já criada, como nome da propriedade desconstruida.
//Usar parentese na criação da var desconstruida
//Sem o ";" no final da criação do objt inicial nao funcionará(Dará erro de inicialização)
let idade 

({age:idade} = Pessoa)
console.log(idade)


