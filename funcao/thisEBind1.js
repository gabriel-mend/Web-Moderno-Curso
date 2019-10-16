const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // referenciando o objeto
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO 

const falarDePessoa = pessoa.falar.bind(pessoa) // Responsavel por amarrar um determinado objeto
falarDePessoa()