export {}

// Exemplo 1 => Intersection Types

interface DadosBancarios {
    conta: number
    agencia: number
    banco: string
}

interface Cliente {
    nome: string
    email: string
}

interface DadosPessoaFisica {
    cpf: string
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica

const dadosCliente: DadosCliente = {
    conta: 12345,
    agencia: 123,
    banco: 'Banco do Brasil',
    nome: 'Rayana',
    email: 'rayana@email.com',
    cpf: '1294855'
}

console.log(dadosCliente)