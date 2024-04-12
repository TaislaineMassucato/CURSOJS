var repro = (nota,falta) => 
{
    if(nota < 7 && falta < 6)
    {
        return 'Reprovou'
    }else{
        return 'Aprovado!'
    }
}
//!Return só quando tem uma linha; Possivel chamar apenas dps de declarada
 var exibirnome = (nome) => nome

console.log (repro(8,6));
console.log (repro(6,5));
console.log(exibirnome('taislaine'))


