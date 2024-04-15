// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
const arr = [];
arr[1] = 'íncice 1'
arr[3] = 'íncice 3'
arr[7] = 'íncice 7'
console.log(arr)
console.log(arr.length)
// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
const cin = [12, 32, 13, 43, 13]
console.log(cin)
cin[0] = 'add'
console.log(cin)
// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
const meuArray =[]
meuArray.push(1)
meuArray.push(2)
meuArray.push(3)
console.log(meuArray)
meuArray[0] *= 2
console.log(meuArray)
// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
const vaz = []
vaz.push(1)
vaz.push(2)
vaz.push(3)
vaz.push(4)
console.log(vaz)
console.log(vaz.length)
vaz.push(1,2,2)
console.log(vaz)
console.log(vaz.length)
// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const clinica = [];

clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");
console.log("Fila de animais após a chegada: ", clinica);

clinica.pop();
clinica.pop();
clinica.pop();
console.log("Fila de animais aguardando: ", clinica);