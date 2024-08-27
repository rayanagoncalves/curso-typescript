// Exemplo 1 => Satisfier Operator

export {}

type Cidade = NomeCidade | CidadeCoordenadas

type NomeCidade = 'Recife' | 'São Paulo' | 'Rio de Janeiro' | 'Belo Horizonte'

type CidadeCoordenadas = {
    x: number
    y: number
}

type Pessoa = {
    localNascimento: Cidade
    residenciaAtual: Cidade
}

const pessoa = {
    localNascimento: 'Recife',
    residenciaAtual: { x: 10, y: 20 }
} satisfies Pessoa

console.log(pessoa.localNascimento.toUpperCase())

// Exemplo 2 => Satisfier Operator

type Connection = {}

declare function createConnection(
    host: string,
    port: string,
    reconnect: boolean,
    poolsize: number
): Connection

type Configuration = {
    host: string
    port: string | number
    tryReconnect: boolean | (() => boolean)
    poolsize ?: number
}

const config = {
    host: 'localhost',
    port: 3306,
    tryReconnect: () => true,
    poolsize: 10
} satisfies Configuration

function connect() {
    let { host, port, tryReconnect } = config

    createConnection(host, `${port}`, tryReconnect(), 10)
}