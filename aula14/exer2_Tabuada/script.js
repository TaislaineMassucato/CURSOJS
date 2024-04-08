function multiplicar()
{
    var n = document.getElementById('valor');
    var res = document.getElementById('resTab');

    if(n.value.length == 0){
        alert('prencha corretamente os campos!!');
    }else{ 
        var num = Number(n.value);
        res.innerHTML = '';
        for(var c = 0 ; c <= 10 ; c++ ){
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
    }
}