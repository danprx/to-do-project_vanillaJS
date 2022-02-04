//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const todosFilter = document.querySelector(".todos-filter");

//Functions
function addTodo(e) {
    if (todoInput.value != false) {
        //Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-div");

        //Item Div
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-div");
        todoDiv.appendChild(itemDiv);

        //Create Button Div
        const btnDiv = document.createElement("div");
        btnDiv.classList.add("btn-div");
        todoDiv.appendChild(btnDiv);

        //Create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        itemDiv.appendChild(newTodo);

        //Create Check Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        btnDiv.appendChild(completedButton);

        //Create Trash Button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        btnDiv.appendChild(trashButton);

        //Append Todo's to List
        todoList.appendChild(todoDiv);

        //Clear TODO Input value
        todoInput.value = "";
    } else {
        alert(
            "You need to give a name for your To Do before you create it! :D"
        );
        todoInput.value = "";
    }
}

function filterTodos(e) {
    const todos = todoList.childNodes;
    const filter = e.target;

    if (filter.nodeName === "OPTION") {
        todos.forEach((todo) => {
            todo.style.display = "flex";
            switch (filter.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "checked":
                    if (todo.classList.contains("completed")) {
                        todo.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "unchecked":
                    if (!todo.classList.contains("completed")) {
                        todo.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        });
    }
}

function deleteCheck(e) {
    const item = e.target;
    const todo = item.parentElement.parentElement;

    // Delete TODO
    if (item.classList[0] === "trash-btn") {
        //Wait for Animation
        todo.classList.add("slide");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }

    //Check TODO
    if (item.classList[0] === "complete-btn") {
        todo.classList.toggle("completed");
    }
}

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todosFilter.addEventListener("click", filterTodos);
