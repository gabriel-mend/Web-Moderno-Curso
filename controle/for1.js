console.log(`
Usando while:
`)
let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

console.log(`
Usando for:
`)
for(let i = 1; i <= 10; i++) { // inicio/ verificacao / incremento
    console.log(`i = ${i}`) 
}
console.log(`
Pecorrendo um array
`)
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}