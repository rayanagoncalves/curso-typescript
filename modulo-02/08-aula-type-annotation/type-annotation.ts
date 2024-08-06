// variáveis
let nome: string = 'Ray'
console.log(nome)

// arrays
let animais: string[] = ['Elefante', 'Gato', 'Cachorro', 'Panda']
console.log(animais)

// objetos
let carro: {
    nome: string,
    ano: number,
    preco: number
} 
carro = { nome: 'Onix', ano: 2023, preco: 80000 }

// funções
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2
}
console.log(multiplicarNumeros(2, 5))