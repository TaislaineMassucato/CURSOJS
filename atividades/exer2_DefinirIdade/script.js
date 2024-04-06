function calcular()
{
   var data = new Date();
   var anoAtual = data.getFullYear();
   var anoDigitado = document.getElementById('ano');
   var nomeDigitado = document.getElementById('nome');
   var msg = document.getElementById('msg');

   if(anoDigitado.value.length == 0 || anoDigitado.value > anoAtual)
   {
        alert('Dados Inválido. Tente novamente!!');
   } else 
   {  
    var idade = (anoAtual - Number(anoDigitado.value));
    var sex = document.getElementsByName('radsex');
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto')
        if(sex[0].checked)
        {
            genero = 'Homem'
            if(idade >= 0 && idade < 10)
            {
                img.setAttribute('src' , 'bebeHomem.jpg')
            }else if(idade < 21){
                img.setAttribute('src' , 'jovemHomem.jpg')
            }else if(idade < 50 ){
                img.setAttribute('src' , 'adultoHomem.jpg')
            }else{
                img.setAttribute('src' , 'idosoHomem.jpg')
            }
        }
        else if(sex[1].checked)
        {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10)
            {
                img.setAttribute('src' , 'bebeMulher.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemMulher.jpg')
            }else if(idade < 50 ){
                img.setAttribute('src' , 'adultoMulher.jpg')
            }else{
                img.setAttribute('src' , 'idosoMulher.jpg')
            }
        }
   }
    msg.style.textAlign = 'center';
    msg.innerHTML = `Temos ${(nomeDigitado.value)} ${genero} de ${idade} anos`; 
    msg.appendChild(img);


}


