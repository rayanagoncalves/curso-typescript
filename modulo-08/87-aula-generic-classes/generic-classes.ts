export {}

// Exemplo 1 => Generic Classes

class Box<T> {
    private item: T

    constructor(item: T) {
        this.item = item
    }

    getItem() {
        return this.item
    }

    setItem(item: T) {
        this.item = item 
    }
}

const boxString = new Box<string>('teste')
const boxNumber = new Box<number>(12)

console.log(boxString.getItem())
console.log(boxNumber.getItem())

// Exemplo 2 => Generic Classes

class Estudante<T, U> {
    private id: T
    private nome: U

    setValor(id: T, nome: U) {
        this.id = id
        this.nome = nome
    }

    retornarValor(): void {
        console.log(`Identificação do Estudante...: ${this.id}, Nome do Estudante...: ${this.nome}`);
    }
}

const estudante = new Estudante<number, string>()
const estudanteSecundario = new Estudante<number, string>()

estudante.setValor(101, 'Rayana')
estudante.retornarValor()

estudanteSecundario.setValor(202, 'Maria')
estudanteSecundario.retornarValor()