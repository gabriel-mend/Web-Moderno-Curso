{
    {
        {
            {
                var sera = 'Será???' 
            }
        }
    }
}
// var sendo declarada fora de escopos acaba sendo global o que pode ocasionar varios problemas de infraestrutura do sistema
console.log(sera)

function teste() {
    // A variavel so fica invisivel no escopo da funcao
    var local = 123
}

teste()
console.log(local)