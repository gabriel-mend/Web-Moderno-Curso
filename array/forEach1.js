const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Requel']
// forEach com dois parametros 
aprovados.forEach(function(nome, indice /*Array*/) {
    console.log(`${indice+1}) ${nome}`)
    // console.log(Array)
})
// forEach funcao inline
aprovados.forEach(nome => console.log(nome))
// forEach passando uma funcao como parametro
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados())