function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) // Contexto lexico o this nao muda
    }, 1000)
}
new Pessoa