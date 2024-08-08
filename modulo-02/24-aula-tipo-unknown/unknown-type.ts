// Exemplo 1: Type Unknown 
let valorVariavel: unknown

valorVariavel = true
valorVariavel = 123
valorVariavel = []
valorVariavel = 'Hello'

console.log(valorVariavel)

// Exemplo 2: Erro ao tentar atribuir o tipo unknown a outros tipos
let valor: unknown
// let valor1: boolean = valor
// let valor2: any = valor

// Exemplo 3: Diferença entre any e unknown
let algumaCoisaAny: any
let algumaCoisaUnknown: unknown

//console.log(algumaCoisaAny.toFixed())

if(typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed())
}

