const valores = [7.7, 8.9, 9.2, 6.3]
console.log(valores[0], valores[3])
console.log(valores[4]) // valor undefined

//valores[10] = 10
//console.log(valores)// 6 campos vazios

valores[4] = 10
console.log(valores)
console.log(valores.length) // quantidade de itens no array

valores.push({id:3}, false, null, 'teste') // adiciona mais itens para o array
console.log(valores)

console.log(valores.pop())// pega o ultimo item do array
delete valores[0] // elimina elementos do array
console.log(valores)
console.log(typeof valores) // Em javascript um array e um tipo object