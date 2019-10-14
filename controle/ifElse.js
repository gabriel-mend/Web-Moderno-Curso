const imprimirResultado = function(nota) {
    if (nota >= 7) { // sempre usar chaves
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(8)
imprimirResultado(6)
imprimirResultado('Epa!') // cuidado!!! 