// Closure é o escopo criado quando uma funcao é declarada
// Esse escopo permite a funcao acessar e manipular variáveis externas a funcao

// Contexto lexico em acao

const x = 'Global'

function fora() {
    // Local do Closure
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())