var n = document.getElementById('num');
var tabInfo = document.getElementById('infos');
var res = document.getElementById('res');
var valores =[];

function isNumero(n)
{
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false;
    }
}
function isLista(n , l){
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }else {
        return false
    }
}
function Adicionar()
{
    if(isNumero(n.value) && !isLista(n.value , valores))
    {
       valores.push(Number(n.value));
       var item = document.createElement('option');
       item.text = `Valor ${n.value} adicionado.`;
       tabInfo.appendChild(item);
    }else{
        alert('algo errado')
    }
    n.value = '';
    n.focus();
}
function Finalizar()
{
    if(valores.length == 0){
        alert('adicione valores antes de finalizar')
    }else{
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores){
            soma += valores[pos] 
            if(valores[0] > maior)
                maior = valores[pos]
            if(valores[0] < menor)
                menor = valores[pos]          
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>O maior é ${maior}</p>`
        res.innerHTML += `<p>A soma é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}