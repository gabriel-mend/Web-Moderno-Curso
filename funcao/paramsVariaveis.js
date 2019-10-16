function soma() {
    let soma = 0
    for (i in arguments) { // quantidade de parametros que foram passados na funcao
        soma += arguments[i] // Quando nenhum parametro e passado esse arguments e vazio
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))
console.log(typeof arguments)