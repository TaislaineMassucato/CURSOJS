var a = '5'
var b = 5

//concatena por conta do + pois confunde se é operação ou concatenação e nao converte apenas concatenando.
console.log(a + b) 
console.log (b + '5')
// faz conversão ímplicita pois reconhece que é uma operação
console.log(b * a)
console.log(b * '5'); 