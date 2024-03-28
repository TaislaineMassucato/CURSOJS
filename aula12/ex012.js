
var idade = 18;
var analfabeta = new Boolean(true)
if(idade > 16 && idade < 18){
    console.log('Voto facultativo')
}else if(idade > 70 || analfabeta == true){
    console.log('Voto facultativo')
}else if(idade >= 18 && idade <= 70){
    console.log ('Bora votar')
}else{
    console.log('Não obrigatório')
}