let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if(task) {
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}

function renderTasks() {
const tasksList = document.getElementById("taskList");
tasksList.innerHTML = "";
tasks.forEach((task,index) => {
const li = document.createElement("li");
li.textContent = task;
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.onclick = () => deleteTask(index);
li.appendChild(deleteButton)
tasksList.appendChild(li)
})
}

function deleteTask(index) {
    tasks.splice(index,1);
    renderTasks();
}
