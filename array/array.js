// Array e um objeto (estrutura indexsada, heterogenea)
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[10])// Undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')//Adiciona ao array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Ordena a lista
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana'] 
aprovados.splice(1, 1) // O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

let myFish = ["angel", "clown", "mandarin", "surgeon"]
myFish.splice(0, 0, "Peixonauta")
console.log(myFish)

/*
Sintaxe
array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])

array.splice(indice) // SpiderMonkey/Firefox extension
Parâmetros
indice
Índice o qual deve iniciar a alterar a lista. Se maior que o tamanho total da mesma, nenhum elemento será alterado. Se negativo, irá iniciar a partir daquele número de elementos a partir do fim.
deleteCount
Um inteiro indicando o número de antigos elementos que devem ser removidos.
Se o parâmetro deleteCount não é especificado, ou se é maior que o número de elementos restantes na lista iniciando pelo índice, então todos os elementos até o fim da lista serão deletados.
Se deleteCount é 0, nenhum elemento é removido. Neste caso você deve especificar pelo menos um novo elemento.
elemento1, ..., elementoN
Os elementos a adicionar na lista. Se você não especificar nenhum elemento, splice simplesmente removerá elementos da mesma.
Retorno
Uma lista contendo os elementos removidos. Se apenas um elemento é removido, por exemplo, uma lista contendo apenas um elemento é retornada. Se nenhum elemento é removido, uma lista vazia é retornada.
*/
