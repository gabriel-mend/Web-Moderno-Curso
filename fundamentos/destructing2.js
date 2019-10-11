const [a] = [10]
console.log(a)
// O que quero destruturar = estrutura que quero remover
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota ] ] = [[, 8, 8], [9, 6, 8]] // NAOOOOOOOO USEEEEE dificil demais
console.log(nota)
