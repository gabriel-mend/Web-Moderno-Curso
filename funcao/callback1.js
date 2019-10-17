const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// Quando ocorrer um evento eu chamo essa funcao
fabricantes.forEach(imprimir)// Volta todos os parametros de volta
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))