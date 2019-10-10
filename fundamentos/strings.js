const escola = "Cod3r"
// Cadeia de caracteres 

console.log(escola.charAt(4)) // Retorna a posicao da letra
console.log(escola.charAt(5)) // Retorna uma posicao vazia pois nao existe
console.log(escola.charCodeAt(3)) // Valor na tabela Unicode
console.log(escola.indexOf('3')) // Procura o valor

console.log(escola.substring(1)) // Imprimi a partir desse valor
console.log(escola.substring(0, 3)) // O primeiro parametro e onde inicia e o ultimo e o delimitador

console.log('Escola '.concat(escola).concat("!")) // concat concatena as strings
console.log('Escola ' + escola + "!") // + tambem serve para concatenar strings
console.log(escola.replace(3, 'e')) // substitui os valores

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array