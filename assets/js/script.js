document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = todoInput.value.trim();

    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }

    addTask(newTask);
    todoInput.value = '';
    saveTasksToLocalStorage();
});

function addTask(task, completed = false) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task;

    const checkBox = createCheckbox(completed);
    const deleteButton = createDeleteButton();
    const editButton = createEditButton(listItem, taskText);

    checkBox.addEventListener('change', function () {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
            listItem.classList.add('completed');
        } else {
            taskText.style.textDecoration = 'none';
            listItem.classList.remove('completed');
        }
        saveTasksToLocalStorage();
    });

    deleteButton.addEventListener('click', function () {
        if (confirm('Are you sure you want to delete this task?')) {
            listItem.remove();
            saveTasksToLocalStorage();
        }
    });

    taskContent.appendChild(checkBox);
    taskContent.appendChild(taskText);
    listItem.appendChild(taskContent);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    if (completed) {
        taskText.style.textDecoration = 'line-through';
        listItem.classList.add('completed');
    }

    todoList.appendChild(listItem);
    saveTasksToLocalStorage();
}

function createCheckbox(completed = false) {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = completed;
    return checkBox;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    return deleteButton;
}

function createEditButton(listItem, taskText) {
    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.innerHTML = '<i class="fas fa-edit"></i>';

    editButton.addEventListener('click', function () {
        console.log('Edit button clicked');
        toggleTaskEditState(listItem, taskText, editButton);
        saveTasksToLocalStorage();
    });

    return editButton;
}

function toggleTaskEditState(listItem, taskText, editButton) {
    const isEditing = listItem.classList.contains('editing');
    console.log(`Toggle edit state: ${isEditing}`);

    const taskContent = listItem.querySelector('.task-content');
    if (isEditing) {
        const input = taskContent.querySelector('input[type="text"]');
        if (input) {
            const newText = input.value.trim();
            console.log(`New text: ${newText}`);
            if (newText) {
                taskText.textContent = newText;
            }
            taskContent.replaceChild(taskText, input);
        }
        listItem.classList.remove('editing');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
    } else {
        const currentText = taskText.textContent.trim();
        console.log(`Current text: ${currentText}`);
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;

        if (taskText.parentNode === taskContent) {
            taskContent.replaceChild(input, taskText);
            listItem.classList.add('editing');
            editButton.innerHTML = '<i class="fas fa-save"></i>';
        } else {
            console.error('taskText is not a child of taskContent');
        }
    }
    saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
    const tasks = [];
    document.querySelectorAll('#todo-list li').forEach(task => {
        const taskText = task.querySelector('span');
        if (taskText) {
            const text = taskText.textContent;
            const isCompleted = task.classList.contains('completed');
            tasks.push({
                text,
                completed: isCompleted
            });
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task.text, task.completed));
}