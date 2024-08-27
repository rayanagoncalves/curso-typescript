export {} 

// Exemplo 1 => Mapped Types

type Usuario = {
    nome: string
    endereco: string
    telefone: string
    idade: number
    apelido: string
}

// { [P in K]: T }

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]
}

// 'nome' | 'endereco' | 'telefone' | 'idade'

const usuarioMapped: UsuarioMappedType = {
    nome: 'Glaucia Ramos',
    endereco: 'Rua 01'
}

console.log(usuarioMapped)

// Exemplo 2 => Outros Tipos Avançados

interface Livro {
    titulo: string
    autor: string | null
    preco: number
    numeroPaginas: number
}

type Artigo = Omit<Livro, 'numeroPaginas'>

type LivroModelo = Readonly<Livro>

const livro: LivroModelo = {
    autor: 'Boris Cherny', 
    numeroPaginas: 324,
    preco: 19.99, 
    titulo: 'Titulo' 
}

// livro.autor = 'Glaucia Lemos' => dá erro