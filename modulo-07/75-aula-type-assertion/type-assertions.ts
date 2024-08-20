export {}

// Exemplo 1 => Type Assertion

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto)

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto
}

//const descontoFinal = exibirPrecoFinal(100, 0.05, true)  as string
const descontoFinal = <number>exibirPrecoFinal(100, 0.05, false)
console.log(descontoFinal)

// Exemplo 2 => Type Assertion

// type Humano = {
//     nome: string
//     idade: number
//     idioma: string
// }

// const humano = {
//     idade: 25,
//     idioma: 'Português'
// }

// const humano2 = humano as Humano 
// console.log(humano2.nome.toLowerCase()) // dá um erro em tempo de execução

// type Humano = {
//     nome: string
//     idade: number
//     idioma: string
// }

// const humano = {
//     idade: 25,
//     idioma: 'Português'
// }

// const humano2: Humano = humano // dá um erro durante a escrita do código
// console.log(humano2.nome.toLowerCase())