//desestruturando OBJ em função e usando rest (OBD:VAZIO NAO FUNCIONA EM OBJ( , PERA))
function liquidificador({pera , ...rsto})
{
    console.log(rsto)
}
const frutas = {
    pera: 'pera',
    maca:'maca',
};

liquidificador(frutas)

//Destruturando ARRAYS em função
function liquidificador2([, f, carne , ...resto])
{
    console.log(carne)
}
const comida = ['arroz', 'feijao', 'carne','salsicha','bife']

liquidificador2(comida)



//Destruturando ARRAYS em função BRINCANDO
function liquidificador3([primeiro,...resto])
{
    console.log(resto)
}

liquidificador3('BANANA')