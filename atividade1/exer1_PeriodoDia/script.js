function carregar(){
    var msgm = document.getElementById('msg');
    var fots = document.getElementById('foto');
    var data = new Date();
   var hora =  6 // data.getHours();
    msgm.innerHTML = `olá agora são ${hora}`
   
if(hora >= 0 && hora <= 4){
    alert('Boa madrugada');
    fots.src = "../exer1_PeriodoDia/manha.jpg"
}else if(hora > 4 && hora < 12){
    alert('Bom dia !!')
    fots.src = "../exer1_PeriodoDia/manha.jpg"
}else if(hora >=12 && hora <= 18){
    alert('Boa tarde !!')
    fots.src = "../exer1_PeriodoDia/tarde.jpg"
}else if(hora >=19 && hora < 24){
    alert('Boa noitee!!')
    fots.src = "../exer1_PeriodoDia/noite.jpg"
}

}