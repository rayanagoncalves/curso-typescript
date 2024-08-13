// Exemplo 1 => while

let contador = 0

while (contador < 5) {
    console.log(contador)
    contador++
}

// Exemplo 2

let numero = 1

while(numero <= 20) {
    if(numero % 5 === 0) {
        console.log('O primeiro número múltiplo de 5 entre 1 e 20 é: ', numero)
        break
    }
    numero++
}

// Exemplo 3 => exemplo mais prático

let contadorUsuario = 0
const usuario: string[] = ['Glaucia', 'Jurema', 'Prince']

while(usuario[contadorUsuario]) {
    console.log('Usuários: ', usuario[contadorUsuario])
    contadorUsuario++
}

// Exemplo 4 => do ... while

let contador1 = 0

do {
    console.log(contador1)
    contador1++
} while (contador1 < 5);