// Exemplo 01 - Uso de colchetes
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(frutas[2])

// Exemplo 2 - Uso de array object
let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(frutas[2])

// Exemplo 3 - Adicionando mais strings com método 'push'
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês']
console.log(idiomas) 
idiomas.push('Mandarim')
console.log(idiomas)
idiomas.push('Italiano')
console.log(idiomas)

// Exemplo 4 - Identificar tamanho do array - método length
let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês']
console.log(idiomas1.length)

// Exemplo 5 - Exemplo de array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5] 
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]
console.log(listaNumeros)

// Exemplo 6 - Exemplo de array com laço de iteração

let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');

function funcaoLinguagens(linguagensArray: string[]) {
    for(let i = 0; i<linguagensArray.length; i++) {
        console.log(linguagensArray[i])
    }
}

funcaoLinguagens(linguagensArray)