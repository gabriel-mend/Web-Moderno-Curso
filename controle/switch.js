const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // A expressao e um valor nao um boleano
        case 10: // 10 ou 9 ele executa o codigo
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break // Executa e sai
        case 6: case 5: case 4: {
            console.log('Recuperecao')
            break
        }
        case 3 : case 2: case 1:case 0:
            console.log('Reprovado')
        default: // Qualquer posiçao ele sempre vai executar
            console.log('Nota inválida')
    }
    console.log('Fim!')
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
