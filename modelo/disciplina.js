class Disciplina {
  constructor(codigo, nome, alunos) {
    this._codigo = codigo;
    this.nomeAluno = nome;
    this.arrayAlunos = alunos;
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(novoCodigo) {
    this._codigo = novoCodigo;
  }

  get nome() {
    return this.nomeAluno;
  }

  set nome(novoNome) {
    this.nomeAluno = novoNome;
  }

  get alunos() {
    return this.arrayAlunos;
  }
}
