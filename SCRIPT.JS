
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('addTodobtn');
const todoList = document.getElementById('todoList');


addTodoBtn.addEventListener('click', addTask);


todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = todoInput.value.trim();

    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

   
    const li = document.createElement('li');
  
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
 
    todoList.appendChild(li);

    
    todoInput.value = '';

    
    addListItemListeners(li);
}


function addListItemListeners(li) {
   
    const taskSpan = li.querySelector('.task-text');
    taskSpan.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
       
        li.remove(); 
    });
}