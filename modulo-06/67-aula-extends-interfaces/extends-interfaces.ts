export {}

// Exemplo 1 => Interfaces com Extends

interface Animal {
    nome: string
    idade: number
    porte: string
}

interface Cachorro extends Animal {
    raca: string
}

const cachorro: Cachorro = {
    nome: 'Prince',
    idade: 2,
    porte: 'Médio',
    raca: 'Spitz Alemão'
}

console.log(cachorro)

// Exemplo 2 => Extensão de múltiplas interfaces

interface Cachorro2 {
    nome: string
}

interface Gato2 {
    nome: string
}

interface Animal2 extends Cachorro2, Gato2 {
    idade: number
}

const animal: Animal2 = {
    nome: 'Farofa',
    idade: 5
}

console.log(animal)

// Exemplo 3 => Uso do Omit (usado para substituir uma propriedade de uma interface estendida)

interface Funcionario {
    id: number
    nome: string
    salario: number
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
    id: string
    salario: string
    linguagemProgramacao: string
}

const desenvolvedor: Desenvolvedor = {
    id: '123',
    nome: 'Rayana',
    salario: '10k',
    linguagemProgramacao: 'Java'
}

console.log(desenvolvedor)

// outra forma de fazer sem o omit

interface Funcionario2 {
    id: number | string
    nome: string
    salario: number | string
}

interface Desenvolvedor2 extends Funcionario2 {
    id: string
    salario: string
    linguagemProgramacao: string
}