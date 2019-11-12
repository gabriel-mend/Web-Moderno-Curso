const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vertappen') // Adiciona no ultimo
console.log(pilotos)

pilotos.shift() // Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no primeiro
console.log(pilotos)

// Slice

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover 
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Inicio até -1
// [ 'Alonso', 'Bottas', 'Raikkonen' ]
console.log(algunsPilotos2)