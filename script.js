const entradaTarefa =document.getElementById('entradaTarefa');
const listaTarefas =document.getElementById('listaTarefas');

function adicionarTarefas() {
    console.log(entradaTarefa.value);
    localStorage.setItem("tarefa1",entradaTarefa.value);
}