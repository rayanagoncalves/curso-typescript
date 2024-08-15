export {}

// Exemplo 1 => Get
class Quadrado {
    private _largura = 6
    private _altura = 12

    get calcularQuadrado() {
        return this._largura * this._altura
    }
}
console.log(new Quadrado().calcularQuadrado)

// Exemplo 2 => Set

class Pessoa {
    nome: string

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa
    }
}
const pessoa = new Pessoa()
pessoa.retornarNomePessoa('Rayana')
console.log('Meu nome é:', pessoa.nome)

// Exemplo 3 => Get (Explicação mais densa)

class Estudante {
    private _nome = 'Rayana'
    private _semestre: string
    private _curso: string

    get nomeEstudante() {
        return this._nome
    }
}
const estudante = new Estudante()
const resultado = estudante.nomeEstudante
console.log(resultado)

// Exemplo 4 => Set/Get (Explicação mais densa)
class Estudante2 {
    nome: string
    semestre: number
    private _curso: string

    constructor(nome: string, semestre: number, curso: string) {
        this.nome = nome
        this.semestre = semestre 
        this._curso = curso
    }

    get obterCurso() {
        return this._curso
    }

    set setarCurso(setCurso: string) {
        this._curso = setCurso
    }
}

const estudante2 = new Estudante2('Rayana', 5, 'Medicina')
console.log(estudante2)

estudante2.setarCurso = 'Direito'
console.log('Curso atualizado:', estudante2.obterCurso)
