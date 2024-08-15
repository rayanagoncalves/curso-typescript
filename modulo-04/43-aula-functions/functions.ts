export {}

// Exemplo 1 => Functions (named functions)

function somarNumeros(num1: number, num2: number): number {
    return num1 + num2
}

const result = somarNumeros(2, 2)
console.log(result)

// Exemplo 2 => Função anônima (Function Expression)

const saudar = function saudar(mensagem: string) {
    return mensagem
}
console.log(saudar('Olá, developers!'))

// Exemplo 3 => Arrow Function Expression

const saudar2 = (mensagem: string) => {
    return mensagem
}
console.log(saudar2('Fala, pessoal!'))

// Exemplo 4 => Function Constructor

const saudar3 = new Function('mensagem', 'return "Fala, " + mensagem' )
console.log(saudar3('galera!'))
