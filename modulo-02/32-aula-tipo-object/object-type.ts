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

// Exemplo 6 => Propriedade readyonly (se deseja proibir que os devs não modifiquem um determinado objeto use o 'readyonly')
interface Pessoa5 {
    nome: string
    funcao: string
    linguagem: string
    readonly email: string // opcional
}

function onboarding5(pessoa: Pessoa5) {
    return 'Seja bem-vinda, ' + pessoa.nome 
    + '. Sua função aqui na empresa será ' + pessoa.funcao 
    + '. Você trabalhará com a linguagem ' + pessoa.linguagem
    + '. Seu email será ' + pessoa.email
}

console.log(onboarding5( {nome: 'Rayana', funcao: 'Dev', linguagem: 'Java', email: 'teste@teste.com '} ))

// Exemplo 7 => tipos de extensão (heranças)
interface Mae {
    nome: string
}

interface Pai {
    sobrenome: string
}

interface Filha extends Mae, Pai {
    idade: number
}

const filha: Filha = {
    nome: 'Rayana',
    sobrenome: 'Goncalves',
    idade: 25
}

console.log(filha)

// Exemplo 8 => Tipos de Interseções
interface Gato {
    tipo: string
}

interface Cachorro {
    tipo: string
}

type Animal = Cachorro & Gato

// Exemplo 9 => Generic Objects
type Usuario = {
    nome: string
    email: string
}

type Admin = {
    nome: string
    email: string
    admin: true
}

const usuario: Usuario = {
    nome: 'Rayana',
    email: 'rayana@email.com'
}

const admin: Admin = {
    nome: 'Rayana',
    email: 'rayana@email.com',
    admin: true
}

function acessarSistema<T>(usuario: T): T {
    return usuario
}

console.log(acessarSistema<Usuario>(usuario))
console.log(acessarSistema<Admin>(admin))

// function acessarSistema(usuario: Usuario): Usuario {
//     return usuario
// }

// console.log(acessarSistema(usuario))
