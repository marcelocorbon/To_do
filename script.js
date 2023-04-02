const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
	// Verificar se o campo de entrada está vazio
	if (taskInput.value === "") {
		alert("Digite uma tarefa para adicionar!");
		return;
	}

	// Criar novo item da lista
	const newTask = document.createElement("li");
	newTask.innerHTML = `
		<span>${taskInput.value}</span>
		<button class="deleteButton">Excluir</button>
	`;

	// Adicionar o novo item à lista
	taskList.appendChild(newTask);

	// Limpar o campo de entrada
	taskInput.value = "";

	// Adicionar evento de clique para excluir tarefa
	const deleteButton = newTask.querySelector(".deleteButton");
	deleteButton.addEventListener("click", deleteTask);
}

function deleteTask(event) {
	// Remover o item da lista
	const taskItem = event.target.parentNode;
	taskList.removeChild(taskItem);
}
