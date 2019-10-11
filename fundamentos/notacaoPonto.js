console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Bola"
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // Recebe o parametro e o deixa publico pra quem instanciar essa classe
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Mesa')
const obj3 = new Obj('Cadeira')
console.log(obj2.nome)
console.log(obj3.nome) // Forma de acessar os menbros
obj3.exec() // Funcoes visiveis para todo mundo