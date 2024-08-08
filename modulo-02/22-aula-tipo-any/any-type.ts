// Exemplo 1: Tipo Any
const a: any = 34
const b: any = ['Ray']

const result = a + b
console.log(result)

// Exemplo 2: Quando o tipo 'any' é inferido implicitamente
// let frase
// frase = 'Oi, pessoal! Tudo bem?'

// Exemplo 3: Quando devemos usar o tipo any?
const formulario: { [campoFormulario: string]: any }  = {
    nome: 'Rayana',
    idade: 34
}
console.log(formulario)