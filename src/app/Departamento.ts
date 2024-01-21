export class Departamento {
  Id: number;
  Nome: string;
  Sigla: string;

  constructor(id: number, nome: string, sigla: string) {
    this.Id = id;
    this.Nome = nome;
    this.Sigla = sigla;
  }
}
