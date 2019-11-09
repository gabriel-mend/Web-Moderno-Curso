function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__) // A partir de uma função contrutora ela apontara para o prototype da funcao onde foi criada

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){ 
    console.log(`Bom dia meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Falar'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(Function.prototype.__proto__ === Object.prototype)
