export {}

// Exemplo 1 => Classes

class Pessoa {
    nome: string
    sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Rayana', 'Gonçalves')
console.log(pessoa.nomeCompleto())

// Exemplo 2 => Classes (sem constructor)

class Estudante {
    codigo: number
    nome: string
}

const estudante = new Estudante()
estudante.codigo = 1
estudante.nome = 'Bruce'

console.log('Código do estudante:', estudante.codigo)
console.log('Nome do estudante:', estudante.nome)

// Exemplo 3 => Classes (com constructor)

class Estudante1 {
    codigo: number
    nome: string

    constructor(codigo: number, nome: string) {
        this.codigo = codigo
        this.nome = nome
    }

    listarEstudante(): void {
        console.log('Código do estudante:', this.codigo)
        console.log('Nome do estudante:', this.nome)
    }
}

const estudante1 = new Estudante1(2, 'Juju')
estudante1.listarEstudante()