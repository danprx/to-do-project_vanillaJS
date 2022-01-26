//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Functions
function addTodo(e){
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Create Check Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Create Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append Todo's to List
    todoList.appendChild(todoDiv);

    //Clear TODO Input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    const todo = item.parentElement;

    //Delete TODO
    if(item.classList[0] === "trash-btn"){
        //Wait for Animation
        todo.classList.add('slide');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //Check TODO
    if(item.classList[0] === "complete-btn"){
        todo.classList.toggle('completed')
    }
}

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);