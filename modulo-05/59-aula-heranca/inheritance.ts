export {}

// Exemplo 1 

class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu ${distancia} metros.`)
    }
}

class Cachorro extends Animal {
    latir() {
        console.log('Au au!')
    }
}

const cachorro = new Cachorro()
cachorro.latir()
cachorro.mover(10)

// Exemplo 2

class Pessoa {
    constructor(private nome: string, private sobrenome: string) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    apresentarPessoa(): string {
        return `Meu nome é ${this.nome} ${this.sobrenome}`
    }
}

class Funcionario extends Pessoa {
    constructor(nome: string, sobrenome: string, private funcao: string) {
        super(nome, sobrenome);
    }

    retornarNome2(): string {
        return super.retornarNomeCompleto() + ` e sou ${this.funcao}`
    }
}

const funcionario = new Funcionario('Rayana', 'Gonçalves', 'Dev')
console.log(funcionario.retornarNomeCompleto())
console.log(funcionario.apresentarPessoa())
console.log(funcionario.retornarNome2())