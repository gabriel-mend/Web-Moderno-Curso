const funcionario = { nome: "Maria", salario: 1230 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Gabriel', ...grupoA]
console.log(grupoFinal)
