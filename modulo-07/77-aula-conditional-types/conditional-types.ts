export {}

// Exemplo 1 => Conditional Types

type Pessoa = {
    nome: string
    idade: number
    endereco: string
}

type Empresa = {
    nome: string
    cnpj: string
}

type EnderecoPessoa = {
    enderecoSecundario: string
    cidade: string
    pais: string
}

type EnderecoEmpresa = {
    localizacao: 'rua' | 'avenida' | 'praça'
}

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa 

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'Rua 2',
    cidade: 'Sao Paulo', 
    pais: 'Brasil'
}

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'rua'
}

console.log(enderecoPessoa)
console.log(enderecoEmpresa)

// Exemplo 2 => Conditional Types

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3'

type FiltrarArquivoAudio<T> = T extends 'mp4' | 'mp3' ? T : never

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>

const arquivoAudio: ArquivoAudio = 'mp4'

console.log(arquivoAudio)