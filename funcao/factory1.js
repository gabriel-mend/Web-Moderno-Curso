// Factory simples
function criarPessoa() { // function factory e uma funcao que retorna um objeto
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())