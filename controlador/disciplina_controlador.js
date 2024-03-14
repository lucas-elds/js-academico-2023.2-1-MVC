class DisciplinaControlador {
  constructor() {
    this.servico = new DisciplinaService();
  }

  inserir() {
    const codigoDis = document.querySelector("#codigoDis");
    const nomeDis = document.querySelector("#nomeDis");

    const disciplinaInserida = this.servico.inserir(
      Number(codigoDis.value),
      nomeDis.value
    );
    const listaDisciplina = document.querySelector("#listaDisciplina");
    if (disciplinaInserida) {
      this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplina);
    }
  }

  inserirDisciplinaNoHtml(disciplina, elementoDestino) {
    const disciplinaElemento = document.createElement("li");
    disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
    elementoDestino.appendChild(disciplinaElemento);
  }
}
