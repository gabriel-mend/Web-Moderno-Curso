let numero = 1

{
    let numero = 2
    // let so fica visivel so no escopo
    // Tambem ele procura do menos abrangente a variavel
    console.log("dentro =", numero)
}
console.log("fora =", numero)