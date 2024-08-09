// Exemplo 1 => Never - Throw Exception
function error(message: string): never {
    throw Error(message)
}

console.log(error('Erro de mensagem - 01'))

// Exemplo 2 => Never inferido automaticamente
function reject() {
    return error('Erro de mensagem - 02')
}

console.log(reject())

// Exemplo 3 => Função que contém loop infinito retorna o tipo never
// const loopInfinito = () => {
//     while(true) {
//         console.log('Oi, developers!')
//     }
// }

// console.log(loopInfinito())

// Exemplo 4 => Diferença entre os tipos never x void
const algumaCoisaVoid: void = null
//const algumaCoisaNever: never = null

console.log(algumaCoisaVoid)
//console.log(algumaCoisaNever)