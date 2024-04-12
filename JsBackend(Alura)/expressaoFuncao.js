// console.log (repro(8,6));
// console.log (repro(6,5));

// var repro = function (nota,falta)
// {
//     if(nota < 7 && falta < 6)
//     {
//         return 'Reprovou'
//     }else{
//         return 'Aprovado!'
//     }
// }

// se colocar o console que chama a função em cima, antes de declarar a var que a guarda, dá erro, pois não chama a função em si , chama a var. 
// Já a função normal , mesmo sendo CHAMADA antes ou depois da funcao eles acham pois procura a função em si


function calculaProduto(a, b = 2, c = 1) {
    return a * b * c;
  }
  
  const resultado1 = calculaProduto(3);
  const resultado2 = calculaProduto(2, 4);
  const resultado3 = calculaProduto(1, 2, 3);
  const resultado4 = calculaProduto(2, undefined, 5);
  
  console.log("Resultado 1:", resultado1);
  console.log("Resultado 2:", resultado2);
  console.log("Resultado 3:", resultado3);
  console.log("Resultado 4:", resultado4);
  