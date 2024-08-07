// Exemplo 1 => Uso simples de Tuplas em TypeScript
let pessoa: [string, string, number]
pessoa = ['Rayana Gonçalves', 'Desenvolvedora', 25]
console.log(pessoa) 

// Exemplo 2 => Acesso o valor da tupla
let pessoa1: [string, string, number]
pessoa1 = ['Rayana Gonçalves', 'Desenvolvedora', 25]
console.log(pessoa[1])

// Exemplo 3 => Outra forma de usar tuplas em TypeScript (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = ['Rayana Gonçalves', 'Desenvolvedora', 25]
console.log(pessoa2)

// Exemplo 4 => Usando tuplas com Spread Operator
let listaFrutas: [string, ...string[]] 
listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(...listaFrutas)

// Exemplo 5 => Lista heterogênea de tupla
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]
console.log(listaFrutas2)

// Exemplo 6 => Uso de função com tuplas
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades]
}

let resultado = listarPessoas(['Glaucia', 'Jurema'], [10, 20])
console.log(resultado)

// Exemplo 7 => Labeled Tuples com Spread Operator numa função
type Nome = 
        | [primeiroNome: string, segundoNome: string] 
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome]
}

console.log(criarPessoa('Glaucia', 'Lemos'))
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'))