// JavaScript code in /assets/js/script.js

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = todoInput.value.trim(); // Use trim() to remove any leading/trailing whitespace

    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }

    addTask(newTask);

    // Clear the input field after adding a task
    todoInput.value = '';
});

function addTask(task) {
    const listItem = document.createElement('li');
    
    // Create a container for task text and buttons
    const taskText = document.createElement('span');
    taskText.textContent = task;
    
    // Create checkbox
    const checkBox = createCheckbox();

    // Create delete button
    const deleteButton = createDeleteButton();
    
    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    
    // Add event listener to the edit button
    editButton.addEventListener('click', function() {
        toggleTaskEditState(listItem, taskText, editButton);
    });

    // Add event listener to the checkbox
    checkBox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
    });

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });
    
    // Append all elements to the listItem
    listItem.appendChild(taskText);
    listItem.appendChild(checkBox);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    // Append the listItem to the todoList
    todoList.appendChild(listItem);
}

function toggleTaskEditState(listItem, taskText, editButton) {
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        // Switch back to view mode
        const input = listItem.querySelector('input[type="text"]');
        if (input) {
            const newText = input.value.trim(); // Get edited value
            if (newText) { // Ensure the new text is not empty
                taskText.textContent = newText; // Update task text with edited value
            }
            listItem.replaceChild(taskText, input); // Replace the input field with the task text span
        }
        listItem.classList.remove('editing');
        editButton.textContent = 'Edit';
    } else {
        // Switch to edit mode
        const currentText = taskText.textContent.trim(); // Get current task text
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;

        // Replace taskText with input field
        listItem.replaceChild(input, taskText);

        listItem.classList.add('editing');
        editButton.textContent = 'Save';
    }
}

function createCheckbox() {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    return checkBox;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    return deleteButton;
}




