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
    const taskContainer = document.createElement('div'); // node
    //Criar um input da nova tarefa
    const newTask = document.createElement('input'); // textnode
    //Criar uma label para nova tarefa
    const taskLabel = document.createElement('label');
    //Escrever o texto da nova tarefa
    const taskDescriptionNode = document.createTextNode(description);
    //Botão remover
    const removeTask = document.createElement('input');

    //Evento de exclusão quando clicar em excluir
    removeTask.addEventListener('click', function(e) {
        taskContainer.parentNode.removeChild(taskContainer);
    }, false);

    //Atributos da tarefa
    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute('value', 'Excluir');
    removeTask.setAttribute('id', 'removeButton');

    //Atributos do texto
    taskLabel.setAttribute('for', description)
    taskLabel.appendChild(taskDescriptionNode);

    //Realiza a incerção dos items
    taskContainer.classList.add('task-item'); 
    taskContainer.appendChild(newTask); 
    taskContainer.appendChild(taskLabel); 
    taskContainer.appendChild(removeTask); 

    //Insere dentro da div id='tasks'
    taskList.appendChild(taskContainer);
}