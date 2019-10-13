function tratarErroELancar(erro) {
    // throw new Error('...') lanca o erro
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // object
        nome: erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!') // certo seria nome 
    } catch (e){
        tratarErroELancar(e) // caso ocorra erro executa isso; aqui e onde posso tratalo
    } finally {
        console.log('final') // Sempre e executado
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)