// colecao dinamica de pares chave/valor
const produto = new Object // Instâcia de um objeto
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Gabriel',
        idade: 16,
        endereco: {
            logradouro: 'Alfeneiros',
            numero: 204
        },
        dono: true
    },
    condutores: [{
        nome: 'Junior',
        idade: 20
    }, {
        nome: 'Ana',
        idade: 29
    }],
    calcularValorSeguro: function() {
        // ...
    }
}
carro.propietario.endereco.numero = '221B' // Quando ja sei o nome do atributo
carro['propietario']['endereco']['logradouro'] = 'Baker Street'
console.log(carro)

// delete carro.condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // Acessar algo que esta indefinido