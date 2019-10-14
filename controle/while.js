// Usado quando a quantidade indeterminada de vezes
// Estrutura mais adequada

function getInteiroAletorio(min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAletorio(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}.`)
} // Enquanto for verdadeiro continua, quando for falso sai
console.log('Ate a proxima!')