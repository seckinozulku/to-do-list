//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);



//Functions

function addTodo(event) {
    event.preventDefault();

    //Create Shopping-List-İtem DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create List Item
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    console.log(newTodo)
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)

    //Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Appent to list 
    todoList.appendChild(todoDiv);

    //Clear Todo Input Value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    //Delete List
    if (item.classList[0] == "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    //Check Mark 
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(e.target.value)
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
                case "uncompleted":
                    if(!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
        }
    });
}