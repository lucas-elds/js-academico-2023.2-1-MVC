class AlunoControlador {
  constructor() {
    this.servico = new AlunoService();
  }

  inserir() {
    const nomeElemento = document.querySelector("#nomeAluno");
    const idadeElemento = document.querySelector("#idadeAluno");
    const matriculaElemento = document.querySelector("#matriculaAluno");
    const alunoInserido = this.servico.inserir(
      nomeElemento.value,
      Number(idadeElemento.value),
      matriculaElemento.value
    );
    const listaAlunosElemento = document.querySelector("#listaAlunos");
    if (alunoInserido) {
      this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
    }
  }

  inserirAlunoNoHtml(aluno, elementoDestino) {
    const alunoElemento = document.createElement("li");
    alunoElemento.textContent = `Matricula: ${aluno.matricula} - Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
    elementoDestino.appendChild(alunoElemento);
  }

  listarAlunosMenoresIdade() {
    const listaAlunosMenoresElemento = document.querySelector(
      "#listaAlunosMenores"
    );
    const alunosMenores = this.servico.listarMenoresIdade();
    alunosMenores.forEach((menor) =>
      this.inserirAlunoNoHtml(menor, listaAlunosMenoresElemento)
    );
  }
}
