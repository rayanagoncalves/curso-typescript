// Exemplo 1 => Exemplo básico do uso do TypeScript
export { }

const pessoa = {
    nome: 'Rayana',
    sobrenome: 'Gonçalves',
    idade: 25,
    funcao: 'Desenvolvedora'
}
console.log(pessoa)

// Exemplo 2 => object como parâmetros da função (eles podem ser anônimos)
function onboarding1(funcionario: { nome: string }) {
    return 'Seja bem-vinda, ' + funcionario.nome
}

console.log(onboarding1({ nome: 'Rayana Gonçalves' }))

// Exemplo 3 => object nomeados
interface Pessoa {
    nome: string
    funcao: string
}

function onboarding2(pessoa: Pessoa) {
    return 'Seja bem-vinda, ' + pessoa.nome + ' sua função aqui na empresa será ' + pessoa.funcao
}

console.log(onboarding2( {nome: 'Rayana', funcao: 'Desenvolvedora' }))

// Exemplo 4 => object como type alias
type Pessoa3 = {
    nome: string
    funcao: string
    linguagem: string
}

function onboarding3(pessoa: Pessoa3) {
    return 'Seja bem-vinda, ' + pessoa.nome 
    + '. Sua função aqui na empresa será ' + pessoa.funcao 
    + '. Você trabalhará com a linguagem ' + pessoa.linguagem
}

console.log(onboarding3( {nome: 'Rayana', funcao: 'Dev', linguagem: 'Java'} ))

// Exemplo 5 => usando optional no object
interface Pessoa4 {
    nome: string
    funcao: string
    linguagem: string
    email?: string // opcional
}

function onboarding4(pessoa: Pessoa4) {
    return 'Seja bem-vinda, ' + pessoa.nome 
    + '. Sua função aqui na empresa será ' + pessoa.funcao 
    + '. Você trabalhará com a linguagem ' + pessoa.linguagem
}

console.log(onboarding4( {nome: 'Rayana', funcao: 'Dev', linguagem: 'Java'} ))