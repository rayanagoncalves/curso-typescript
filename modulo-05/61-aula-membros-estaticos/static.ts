export {};

// Exemplo 1 => Propriedades estáticas

class Funcionario {
  static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    Funcionario.contratacoes++;
  }
}

const funcionario1 = new Funcionario('Rayana', 'Gonçalves', 'Dev');
const funcionario2 = new Funcionario('Maria', 'Luisa', 'Médica');
console.log(Funcionario.contratacoes);

// Exemplo 2 => Métodos estáticos

class Funcionario2 {
  private static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    Funcionario2.contratacoes++;
  }

  static retornarContratacoes() {
    return Funcionario2.contratacoes;
  }
}

const funcionario3 = new Funcionario2('Rayana', 'Gonçalves', 'Dev');
const funcionario4 = new Funcionario2('Maria', 'Luisa', 'Médica');
console.log(Funcionario2.retornarContratacoes());

// Exemplo 3 => Propriedades estáticas

type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
  nome: string;
  idade: number;
  racas: Raca[];
  static QTD_CACHORRO_VENDIDO = 0;

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome;
    this.idade = idade;
    this.racas = racas;

    Cachorro.QTD_CACHORRO_VENDIDO++;
    console.log(Cachorro.QTD_CACHORRO_VENDIDO);
  }

  exibirInformacao() {
    console.log(`O cachorro ${this.nome} tem ${this.idade}.`)
  } 
}

const cachorro = new Cachorro('Pipoca', 4, ['Spitz Alemão'])
const cachorro_02 = new Cachorro('Farofa', 6, ['Yorkshire']);
