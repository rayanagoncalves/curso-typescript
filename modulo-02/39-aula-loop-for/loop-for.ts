// Exemplo 1 => loop for

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Exemplo 2 => loop for ... of (retorna uma coleção de matriz, lista ou tupla)

const arrayNumeros = [10, 20, 30, 40, 50]

for (const i of arrayNumeros) {
    console.log(i)
}

// Exemplo 3 => for ... in (retorna uma coleção de matriz, lista ou tupla)

const arrayNumeros01 = [3, 2, 1, 0] 

// for (const i in arrayNumeros01) {
//     console.log(i)
// }

// sort()

const ordemNumerica: number[] = arrayNumeros01.sort()
console.log(ordemNumerica)