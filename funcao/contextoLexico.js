const valor = 'Global'

function minhaFuncao() { // Carrega o contexto no qual foi declarada
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()