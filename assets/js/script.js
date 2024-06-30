const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }

    addTask(newTask);

    todoInput.value = ''; // Clear the input field after adding a task
});

function addTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    // Add event listener for the checkbox inside addTask function
    checkBox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }

        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
    });

    // Add event listener for delete button (if needed)
    deleteButton.addEventListener('click', function() {
        listItem.remove(); // Remove the task from the list
    });
}
    )};
