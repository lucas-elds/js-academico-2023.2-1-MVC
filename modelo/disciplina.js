class Disciplina {
  constructor(codigo, nome, alunos) {
    this._codigo = codigo;
    this.nome = nome;
    this.alunos = alunos;
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(novoCodigo) {
    this._codigo = novoCodigo;
  }

  get nome() {
    return this.nome;
  }

  set nome(novoNome) {
    this.nome = novoNome;
  }

  get alunos() {
    return this.alunos;
  }
}
