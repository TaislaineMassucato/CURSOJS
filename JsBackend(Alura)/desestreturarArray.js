const frutas = ['banana' , 'pera', 'uva']

//pegar uva 
const [ , ,uva] = frutas
console.log(uva);

//pegar outras
const [, p , u] = frutas
console.log(p,u);

//usar REST (...)
const [, ...resto] = frutas
console.log(resto)

const [ , pe , ...qualquerResto] = frutas
console.log(pe)

const [ ba,  , ...qualquer] = frutas
console.log(ba)
console.log(qualquer)

