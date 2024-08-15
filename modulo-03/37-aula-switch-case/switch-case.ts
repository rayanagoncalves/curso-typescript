export { }

// Exemplo 1 => uso do switch ... case

let flor = 'tulipa'

switch (flor) {
    case 'rosa':
        console.log('Rosas são vermelhas')
        break;
    case 'violeta':
        console.log('Violetas são azuis')
        break;
    case 'tulipa':
        console.log('Tulipas são brancas')
        break;
               
    default:
        console.log('Por favor, selecione uma outra flor!')
}

// Exemplo 2 => uso do switch ... case

let diaUtilSemana = 5

switch (diaUtilSemana) {
    case 1:
        console.log('Segunda-feira')
        break;
    case 2:
        console.log('Terça-feira')
        break;
    case 3:
        console.log('Quarta-feira')
        break;
    case 4:
        console.log('Quinta-feira')
        break;
    case 0:
        console.log('Sexta-feira')
        break;
               
    default:
        console.log('Não é um dia útil!')
}