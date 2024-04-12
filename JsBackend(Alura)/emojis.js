// const cifrao = '\u0024'
// const aMaiusculo = '\u0041'
// const tique = '\u2705'
// const hiragana = '\u3041'

// console.log(cifrao)
// console.log(aMaiusculo)
// console.log(tique)
// console.log(hiragana)

// let valor1 = 0
// let abacate
// let valor2 = "10"

// console.log("valor1 é do tipo:", typeof valor1)
// console.log("abacate é do tipo:", typeof abacate)
// console.log("valor2 é do tipo:", typeof valor2)


// Criando um símbolo
const meuSimbolo = Symbol();

// Símbolos podem receber uma descrição (opcional)
const simboloComDescricao = Symbol('descricao_do_simbolo');

// Símbolos são únicos
const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); // Saída: false

// Símbolos podem ser usados como chaves de propriedades de objetos
const obj = {
  [meuSimbolo]: 'valor_do_simbolo'
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'
