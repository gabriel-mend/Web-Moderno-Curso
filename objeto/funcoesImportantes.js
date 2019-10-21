const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // target, par, valor
    enumerable: true, // Visivel pelo key
    writable: false, // Alteravel
    value: '01/01/2019' // Valor da chve
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Obeject.assign (ECMAScript 2015)
const dest = { a: 1} 
const ob1 = { b: 2 }
const ob2 = { c: 3, a: 4 }
const obj = Object.assign(dest, ob1, ob2) // Adiciona objetos a outro objeto e sobscreve atributos
console.log(obj)

Object.freeze(obj) // Deixa constante objetos
obj.c = 1234
console.log(obj)