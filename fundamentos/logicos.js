function compras(trabalho1, trabalho2){
    const comparSorvete = trabalho1 || trabalho2 // ou
    const comparTv50 = trabalho1 && trabalho2 // e curto circuito
    // const comparTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comparTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comparSorvete // operadorunario

    return { comparSorvete, comparTv50, comparTv32, manterSaudavel } // ES06
}

console.log(compras(true, true))
console.log('')
console.log(compras(true, false))
console.log('')
console.log(compras(false, true))
console.log('')
console.log(compras(false, false))