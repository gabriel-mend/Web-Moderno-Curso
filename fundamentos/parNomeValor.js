// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico 2
    //escopo
    return saudacao
}

// Objetos sao grupos annhados de pares nome/valor
const cliente = {
    nome: 'Gabriel',
    idade: 32,
    peso: 14,
    endereco: {
        logradouro: 'Rua legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)