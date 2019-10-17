class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Joao')
p1.falar()

const pessoa = nome => {
    return {
        // Método
        falar: () =>  console.log(`Meu nome é ${nome}`) // Ele tem uma nocao do propio contexto lexico
    }
}
const p2 = pessoa('Rodolfo')
p2.falar()