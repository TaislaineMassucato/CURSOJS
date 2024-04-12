function repro(nota,falta)
{
    if(nota < 7 && falta < 6)
    {
        return 'Reprovou'
    }else{
        return 'Aprovado!'
    }
}

console.log (repro(8,6));
console.log (repro(6,5));

