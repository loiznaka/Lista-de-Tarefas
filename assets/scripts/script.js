// Variáveis constantes
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

// Executar Função de Inserção de Tarefa quando clicar no botão
form.onsubmit = function(e) {
    e.preventDefault();
    // Variável do texto no campo input
    const inputField = document.getElementById('task-input');
    // Condicionais
    if(inputField.value == "") {
        return alert("Você não inseriu uma tarefa");
    }
    // Função de adicionar tarefa á lista
    addTask(inputField.value);
    // Função de resetar texto do input
    form.reset();
}

// Função de adicionar tarefa
function addTask(description) {
    // Variáveis constantes
    // Criar div da tarefa
    const taskContainer = document.createElement('div');
    //Criar um input da tarefa
    const newTask = document.createElement('input');
    //Criar uma label para tarefa
    const taskLabel = document.createElement('label');
    //Escrever o texto da tarefa
    const taskDescriptionNode = document.createTextNode(description);

    //Atributos da tarefa
    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    //Atributos do texto
    taskLabel.setAttribute('for', description)
    taskLabel.appendChild(taskDescriptionNode);

    //Realiza a incerção dos 
    taskContainer.classList.add('task-item'); // Div class task-item
    taskContainer.appendChild(newTask); // Input
    taskContainer.appendChild(taskLabel); // Label

    //Insere dentro da div id='tasks'
    taskList.appendChild(taskContainer);
}