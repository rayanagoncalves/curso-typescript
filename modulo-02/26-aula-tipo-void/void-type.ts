// Exemplo 1 => Funções
function logError(errorMessage: string) {
    console.log(errorMessage)
}

logError('Required Field - Name!')

// Exemplo 2 => Funções
const logErrorExample2 = (errorMessage: string): void => {
    console.log(errorMessage)
}

logErrorExample2('Required Field - Surname!')

// Exemplo 2 => Variáveis
let variavelExemplo2: void
variavelExemplo2 = null
variavelExemplo2 = undefined

console.log(variavelExemplo2)