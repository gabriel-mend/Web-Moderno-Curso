// Funcao sem retorno
// Conceito de funcao : Um trecho de codigo reutilizavel

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 10 ,3, 5, 6, 7) // Ignora o resto
imprimirSoma() //NaN

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // Considerou o valor padrao de b
console.log(soma())