let dobro = function (a) {
    return 2 * a
}
dobro = (a) => { // Sempre e uma funcao anonima
    return 2 * a
}
dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // Sem parametros
ola = _ => 'Olá' // Sem parametros
console.log(ola())
console.log(ola('Ola')) // Ignora os parametros