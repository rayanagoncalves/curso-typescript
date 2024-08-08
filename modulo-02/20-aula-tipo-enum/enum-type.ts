// Exemplo 1 => Numeric Enums
enum Idioma {
    Portugues,
    Espanhol,
    Frances,
    Ingles
}
console.log(Idioma)

// Exemplo 2 => String Enums
enum DiasSemana {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}
console.log(DiasSemana.Segunda)

// Exemplo 3 => Como podemos acessar um valor de um Enum como uma chave: (usando o const)
const enum Comida {
    Hamburguer = 'Hamburguer',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco'
}

function comida(c: Comida) {
    return 'Comidas muito apetitosas!'
}

console.log(comida(Comida.Churrasco))
console.log(comida(Comida.Hamburguer))
//console.log(comida(4))

// Exemplo 4 => Quando usar enum?
enum Tarefa {
    Todo, 
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso.'
}

if(concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!')
}