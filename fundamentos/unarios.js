let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // precedencia : prioridade maior ate em comparacoes
console.log(num1)

console.log(++num1 === num2--) // incremento em comparacao nao e recomendado
console.log(num1 === num2)
