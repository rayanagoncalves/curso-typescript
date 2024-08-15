export {}

// Exemplo 1

class Funcionario {
    readonly dataNascimento: Date

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento
    }
}

const funcionario = new Funcionario(new Date(1999, 5, 12))
// funcionario.dataNascimento = new Funcionario(new Date()) => erro

// Exemplo 2 

class Funcionario2 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento
    }
}

// Exemplo 3

class Funcionario3 {
    nome: string
    readonly codigo: number
  
    constructor(nome: string, codigo: number) {
        this.nome = nome
        this.codigo = codigo
    }
}

const func = new Funcionario3('Rayana', 123)
func.nome = 'Ana'
// func.codigo = 12 => erro

console.log(func)

// Exemplo 4 => Interface

interface IFuncionario {
    codigo: number,
    nome: string
}