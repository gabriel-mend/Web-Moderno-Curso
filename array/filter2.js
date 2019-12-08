Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [ 
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12, fragil: true },
    { nome: 'Copo de Plástico', preco: 5, fragil: false }
]
// Filter retorna true ou falso
const produtoFragil = p => p.fragil
const produtoCaro = p => p.preco > 1000 
console.log(produtos.filter2(produtoFragil))
console.log(produtos.filter2(produtoCaro))
// Ou chamar a função mais de uma vez
console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))