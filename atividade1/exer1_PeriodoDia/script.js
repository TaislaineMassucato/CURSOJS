function carregar(){
    var msgm = document.getElementById('msg');
    var fots = document.getElementById('imagem');
    var data = new Date();
   var hora =  20 // data.getHours();
    msgm.innerHTML = `olá agora são ${hora}`
   
if(hora >= 0 && hora <= 4){
    alert('Boa madrugada');
    fots.src = "manha.jpg"
}else if(hora > 4 && hora < 12){
    alert('Bom dia !!')
    fots.src = "manha.jpg"
}else if(hora >=12 && hora <= 18){
    alert('Boa tarde !!')
    fots.src = "tarde.jpg"
}else if(hora >=19 && hora < 24){
    alert('Boa noitee!!')
    fots.src = "noite.jpg"
}

}