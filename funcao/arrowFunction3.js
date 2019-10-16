let comparaComThis = function (param) {
    console.log(this === param) // Varia comforme a chamada
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj) // ARROW FUNCTION NAO MUDA NEM COM BIND
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)