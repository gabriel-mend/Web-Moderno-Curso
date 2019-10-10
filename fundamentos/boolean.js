let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Mata a primeira negaçao
console.log(!true)
console.log(!!true)
console.log(!false)
console.log(!!false)

console.log('os verdadeiros...')
console.log(!! 3)
console.log(!! -1)
console.log(!! ' ')
console.log(!! 'True')
console.log(!! [])
console.log(!! {})
console.log(!! Infinity)
console.log(!! (isAtivo = true))

console.log('os falsos...')
console.log(!! 0)
console.log(!! '')
console.log(!! null)
console.log(!! NaN)
console.log(!! undefined)
console.log(!! (isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa' || 123)) // retorna o primeiro valor true

let nome = 'Gabriel'

console.log(nome || 'Desconhecido')
