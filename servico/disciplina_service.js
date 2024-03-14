class DisciplinaService {
  constructor() {
    this.repositorio = new DisciplinaRepositorio();
  }

  inserir(codigo, nome) {
    const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
    if (disciplinaPesquisada.length > 0) {
      window.alert("Disciplina já cadastrada!");
      throw new Error("Disciplina já cadastrada!");
    }
    const disciplinaNova = new Disciplina(codigo, nome);
    this.repositorio.inserir(disciplinaNova);
    return disciplinaNova;
  }

  remover(codigo) {
    this.repositorio.remover(codigo);
  }

  pesquisarPorCodigo(codigo) {
    return this.repositorio
      .listar()
      .filter((disciplina) => disciplina.codigo === codigo);
  }
}
