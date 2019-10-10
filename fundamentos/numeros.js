const peso1 = 1.0
const peso2 = Number('2.0')

console.log (peso1, peso2)
console.log(Number.isInteger(peso1)) // Number e uma funçao
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.781

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed Imprimi o tanto de casas decimais que eu quiser
console.log(media.toString(2)) // toString() passa o valor para string se eu colocar um parametro ele passa a ser binario
console.log(typeof media) // typeof Verifica o tipo da variavel