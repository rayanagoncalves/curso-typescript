export {}

// Exemplo 1 => Interface simples

interface Pessoa {
    nome: string
    sobrenome: string
    idade: number
}

function exibirNome(pessoa: Pessoa) {
    return `
        Nome: ${pessoa.nome}
        Sobrenome: ${pessoa.sobrenome}
        Idade: ${pessoa.idade}
    `
}

const glaucia = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 36
}

console.log(exibirNome(glaucia))

// Exemplo 2 => Interface com propriedades opcionais

interface Livro {
    titulo: string
    autor: string
    paginas?: number
}

const livro: Livro = {
    titulo: 'Clean code',
    autor: 'Robert C. Martin'
}

console.log(livro)

// Exemplo 3 => Interface com propriedades somente leitura e opcionais

interface Carro {
    readonly modelo: string
    ano: number
    valor?: number
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969
}

console.log(carro)

// Exemplo 4 => Interface com implements Class

interface IAnimal {
    nome: string
    idade: number
    estaVivo: boolean
    comer(tipoComida: string): void
}

class Gato implements IAnimal {
    nome: string
    idade: number
    estaVivo: boolean
    
    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome
        this.idade = idade
        this.estaVivo = estaVivo
    }

    comer(tipoComida: string): void {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`)
    }
}

const gato = new Gato('Totó', 10, true)
console.log(gato)
gato.comer('Ração')

// Exemplo 5 => Interface vs Alias Type

interface Pessoa {
    nome: string
    sobrenome: string
    idade: number
}

type Pessoa03 = {
    nome: string
    sobrenome: string
    idade: number
}