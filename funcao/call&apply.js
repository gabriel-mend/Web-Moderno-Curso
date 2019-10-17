function getPreco(imposto = 0, moeda = 'R$') {
    return ` ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20 
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro)) // Pega o contexto com this
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // Primeiro o contexto depois os parametros
console.log(getPreco.apply(carro, [0.17, '$'])) // A diferenca de chamar uma funcao e que uma e separada por virgula e a outra por um array