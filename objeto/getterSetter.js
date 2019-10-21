const sequencia = {
    _valor: 1, // Convençao( anderline significa que e um metodo e privado )
    get valor() { return this._valor ++ }, // nao aceita metodos com nomes iguais e diferentes parametros
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)