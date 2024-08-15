export { }

// Exemplo 1 => uso do if

const numMax = 100
let contador = 100

if(contador > numMax) {
    contador++
}

console.log(contador)

// Exemplo 2 => uso do if

const permissaoIdadeDirigir = 18

if(permissaoIdadeDirigir >= 18) {
    console.log('Você está habilitado para dirigir')
}

// Exmplo 3 => Uso do if-else

const permissaoIdadeDirigir01 = 18

if(permissaoIdadeDirigir01 <= 17) {
    console.log('Você está habilitado para dirigir')
} else {
    console.log('Você não está habilitado para dirigir')
}

// Exemplo 4 => if ... else if

let desconto: number
const itemContador = 14

if(itemContador > 0 && itemContador <= 5) {
    desconto = 5
} else if(itemContador > 5 && itemContador <= 10) {
    desconto = 10
} else {
    desconto = 15
}

console.log(`Você teve um desconto de: ${desconto}% de desconto`)

// Exemplo 5 => Ternário (? :) if ... else

const idadeVotacao = 18

// if(idadeVotacao >= 18) {
//     console.log('Você é elegível para votar')
// } else {
//     console.log('Você não é elegível para votar')
// }

// => Ternário

const podeVotar = idadeVotacao >= 18 ? 'Você é elegível para votar' : 'Você não é elegível para votar'
console.log(podeVotar)