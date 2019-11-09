// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Notebook', preco : 1999, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto))// Não posso adicionar nenhum atributo
produto.nome = 'Borracha'
delete produto.tag
produto.descricao = 'Borracha Branca'
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 16 }
Object.seal(pessoa)// Não posso deletar

console.log('Selado:', Object.isSealed(pessoa))
pessoa.nome = 'Carlos'
pessoa.peso = 55.55
delete idade
console.log(pessoa)

// Object.freeze = selado + valores constantes

const carro = { marca: 'Ford', velMax: 200 }
Object.freeze(carro)

console.log('Congelado:', Object.isFrozen(carro))

carro.marca = 'Ferrari'
carro.delta = 0
delete velMax

console.log(carro)