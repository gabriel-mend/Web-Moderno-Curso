function getInteiroAletorio(min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
let opcao = -1

do { // Ele executa o primeiro bloco de codigo depois ele verifica se deve continuar
    opcao = getInteiroAletorio(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Ate a proxima!')