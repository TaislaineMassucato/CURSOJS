            // Função de calculadora simples
// function calculadoraSimples(a, b, operacao) {
//     let resultado;
//     if (operacao === 'soma') {
//         return resultado = a + b;
//     } else if (operacao === 'subtracao') {
//         return resultado = a - b;
//     } else if (operacao === 'multiplicacao') {
//         return resultado = a * b;
//     } else if (operacao === 'divisao') {
//         return resultado = a / b;
//     } else {
//         return resultado = 'Operação não reconhecida';
//     }
     
// }

                // // Expressao Funcão
// var calculadoraSimples = function (a, b, operacao) {
//     let resultado;
//     if (operacao === 'soma') {
//         return resultado = a + b;
//     } else if (operacao === 'subtracao') {
//         return resultado = a - b;
//     } else if (operacao === 'multiplicacao') {
//         return resultado = a * b;
//     } else if (operacao === 'divisao') {
//         return resultado = a / b;
//     } else {
//         return resultado = 'Operação não reconhecida';
//     }
     
// }

                //Arrow Function
    var calculadoraSimples = (a, b, operacao) => {
    let resultado;
    if (operacao === 'soma') {
        return resultado = a + b;
    } else if (operacao === 'subtracao') {
        return resultado = a - b;
    } else if (operacao === 'multiplicacao') {
        return resultado = a * b;
    } else if (operacao === 'divisao') {
        return resultado = a / b;
    } else {
        return resultado = 'Operação não reconhecida';
    }
     
}


console.log(calculadoraSimples(1,8,'soma'))