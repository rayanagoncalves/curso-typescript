export {}

// Exemplo 1 - Type Casting: 'as'

const nome: unknown = 'Rayana'
console.log((nome as string).toLowerCase())

// Exemplo 2 - Type Casting: '<>'

const carro = 'Corolla'

const tamanhoString: number = (<string>carro).length
console.log('O tamanho da string é', tamanhoString)