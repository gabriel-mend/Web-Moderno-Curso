const produtos = [ 
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12, fragil: true },
    { nome: 'Copo de Plástico', preco: 5, fragil: false }
]
// Filter retorna true ou falso
const produtoFragil = p => p.fragil
const produtoCaro = p => p.preco > 1000 
console.log(produtos.filter(produtoFragil))
console.log(produtos.filter(produtoCaro))
// Ou chamar a função mais de uma vez
console.log(produtos.filter(produtoCaro).filter(produtoFragil))