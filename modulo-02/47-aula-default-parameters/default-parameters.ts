export {}

// Exemplo 1 => Default Parameters

function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto)
}
console.log(descontoCompra(100))

// Exemplo 2 

function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal') {
    return saudar + ' ' + mensagem
}
console.log(exibirMensagem('JavaScript Developers!'))

// Exemplo 3 
function exibirNome(nome: string, sobrenome = 'Lemos') {
    return nome + ' ' + sobrenome
}
const resultado1 = exibirNome('Rayana')
const resultado2 = exibirNome('Rayana', undefined)
const resultado3 = exibirNome('Rayana', 'Gonçalves')

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
