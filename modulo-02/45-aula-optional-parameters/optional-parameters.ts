// Exemplo 1 => Optional Parameters
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
    console.log('Id Funcionário:', idPessoa, 'Nome:', nome)

    if(email !== undefined) console.log('Email:', email)
}

informarDadosPessoa(1, 'Rayana')
informarDadosPessoa(2, 'Jurema', 'jurema@email.com')

// Exemplo 2
function mensagemLog(mensagem: string, usuarioId?: number) {
    const horaLog = new Date().toLocaleTimeString()

    console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)!')
}

mensagemLog('Atualizar página')
mensagemLog('Usuário logado com sucesso', 123)

// Exemplo 3

type Pessoa = {
    idFuncionario: number
    nome: string
    idade?: number
    email?: string
}

let pessoa: Pessoa

pessoa = {
    idFuncionario: 123,
    nome: 'Ray'
}

console.log(pessoa)