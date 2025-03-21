
let todos = JSON.parse(localStorage.getItem('todos')) || []; // Load todos from localStorage if available

function getTodo(event) {
    event.preventDefault();  
    const todoInput = document.getElementById('todo-input');
    const todo = todoInput.value.trim(); 
    
    if (todo === '') {  
        return alert('Please Enter the ToDo for continue');
    }
    
    todos.push({ text: todo, completed: false }); 
    todoInput.value = '';  
    saveTodos();  
    showTodos();  
}

function showTodos() {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = ''; 

    todos.forEach((todo, index) => {
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');

        let taskText = document.createElement('h4');
        taskText.innerText = todo.text;
        if (todo.completed) {
            taskText.classList.add('completed');  // If the task is completed, add a class to strike through text
        }

        let completeButton = document.createElement('button');
        completeButton.innerText = '✔';
        completeButton.addEventListener('click', () => toggleComplete(index));

        let deleteButton = document.createElement('button');
        deleteButton.innerText = '❌';
        deleteButton.addEventListener('click', () => deleteTodo(index));

        todoDiv.appendChild(taskText);
        todoDiv.appendChild(completeButton);
        todoDiv.appendChild(deleteButton);

        todoContainer.appendChild(todoDiv);
    });
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;  
    saveTodos();
    showTodos();  
}
function deleteTodo(index) {
    todos.splice(index, 1); 
    saveTodos();  
    showTodos(); 
}

function clearTodos() {
    todos = [];  
    saveTodos();  
    showTodos();  
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));  // Save todos as a string to localStorage
}
showTodos();

