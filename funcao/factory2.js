// Criando um produto
function createProduct(nome, preco) {
    return {
        nome,
        preco,
        desconto: 10
    }
}

console.log(createProduct('Arroz', 5))
console.log(createProduct('Carro', 10))
