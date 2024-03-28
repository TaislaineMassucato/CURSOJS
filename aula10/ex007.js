
function somar()
{
    var t1 = window.document.getElementById('txt1');
    var t2 = window.document.querySelector('input#txt2');
    var res = window.document.getElementById('divRes');
    var tn1 = parseFloat(t1.value);
    var tn2 = parseFloat(t2.value);
    var soma = tn1 + tn2;
    res.innerHTML = `A soma de ${tn1} + ${tn2} = <strong>${soma}</strong>`;
}