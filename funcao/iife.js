// IIFE -> Immediately Invoked Function Expression

(function(){
    
    // Tudo esta envolvido nesta funcao nao no escopo global
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')

})()

console.log('Escopo global!')
console.log('Tudo visivel')