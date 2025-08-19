const taskInputElement = document.getElementById('taskInput');
const addButtonElement = document.getElementById('addBtn');
const taskListElement = document.getElementById('taskList');

function createTaskItem(taskText) {
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(taskText));

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
        const currentText = listItem.firstChild.nodeValue;
        const updatedText = prompt('Edit your task', currentText);
        if (updatedText && updatedText.trim()) {
            listItem.firstChild.nodeValue = updatedText.trim();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskListElement.removeChild(listItem);
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

function addTask() {
    const taskText = taskInputElement.value.trim();
    if (!taskText) {
        alert('Please enter a task.');
        return
    }

    const listItem = createTaskItem(taskText);
    taskListElement.appendChild(listItem);
    taskInputElement.value = '';
    taskInputElement.focus();
}

taskInputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
addButtonElement.addEventListener('click', addTask);