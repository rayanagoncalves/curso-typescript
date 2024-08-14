export {}

// Exemplo 1 => Modificador Public

class Estudante {
    codigo: number
    nome: string
}

const estudante = new Estudante()
estudante.codigo = 1
estudante.nome = 'Rayana'

console.log(estudante.codigo)
console.log(estudante.nome)

// Exemplo 2 => Modificador Private

class Estudante2 {
    codigo: number
    nome: string
    private idade: number

    constructor(codigo: number, nome: string, idade: number) {
        this.codigo = codigo
        this.nome = nome
        this.idade = idade
    }

    retornarDadosEstudante(): string {
        return `Código do estudante: ${this.codigo}. 
            Nome do estudante: ${this.nome}. 
            Idade do estudante: ${this.idade}`
        }
}

const estudante2 = new Estudante2(123, 'Rayana', 25)
console.log(estudante2.retornarDadosEstudante())

// Exemplo 3 => Modificador Protected
class Estudante3 {
    codigo: number
    protected nome: string

    constructor(codigo: number, nome: string) {
        this.codigo = codigo
        this.nome = nome
    }

    retornarDadosEstudante(): string {
        return `Código do estudante: ${this.codigo}. Nome do estudante: ${this.nome}.`
    }
}

class Pessoa extends Estudante3 {
    private curso: string

    constructor(codigo: number, nome: string, curso: string) {
        super(codigo, nome);
        this.curso = curso
    }

    retornarDadosAluno(): string {
        return `Código do estudante: ${this.codigo}.
         Nome do estudante: ${this.nome}.
         Curso: ${this.curso}.`
    }
}

const estudante3 = new Pessoa(123, 'Rayana', 'TI')
console.log(estudante3.retornarDadosAluno())
