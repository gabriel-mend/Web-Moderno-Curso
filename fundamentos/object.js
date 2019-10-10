const prod1 = {}
// Colecao de chaves e valor

prod1.nome = 'Celular'
prod1.preco = 4000.9
prod1['desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = { // 
    nome : 'Camisa',
    preco : 79.99,
    obj : {
        blabla : 1,
        obj : {
            blabla : 2
        }
    }
}
prod2['desconto legal'] = 0.40 // evitar atributos com espaço

"{ 'name': 'gabriel', 'idade' : 22 }" // JSON

console.log(prod2)