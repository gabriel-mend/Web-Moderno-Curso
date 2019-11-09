class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profisao = 'Professor') {
        super(sobrenome)
        this.profisao = profisao
    }
}

class Filho extends Pai {
    constructor(sobrenome) {
        super(sobrenome)
    }
}

const filho = new Filho('Mendonça')
console.log(filho)
