const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const btnSquat = document.getElementById("btn-squat");
const btnBPress = document.getElementById("btn-bpress");
const btnRow = document.getElementById("btn-row");
const btnOPress = document.getElementById("btn-opress");
const btnDeadlift = document.getElementById("btn-deadlift");
const btnDips = document.getElementById("btn-dips");
const btnPullup = document.getElementById("btn-pullup");

const TODOS_KEY = "todos";

let toDos = {
    "Squat": 0,
    "Bench Press": 0,
    "Pendlay Row": 0,
    "Overhead Press": 0,
    "Deadlift": 0,
    "Dips": 0,
    "Pull Up": 0
};

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos[li.id]--;
    paintToDo();
    saveToDos();
}

function paintToDo() {
    for (const [key, value] of Object.entries(toDos)) {
        if (value !== 0) {
            console.log(`${key} : ${value}`);
            const li = document.createElement("li");
            li.id = key;
            const span = document.createElement("span");
            let sets;
            if (value === 1) {
                sets = "set";
            }
            else {
                sets = "sets"
            }
            span.innerText = `${key}: ${value} ${sets}`;
            const button = document.createElement("button");
            button.innerText = "❌"
            button.addEventListener("click", deleteTodo);
            li.appendChild(span);
            li.appendChild(button);
            const removeli = document.getElementById(key);
            if (removeli !== null) {
                toDoList.removeChild(removeli);
            }
            toDoList.appendChild(li);
        }
    }
    // const li = document.createElement("li");
    // // li.id = newTodo.id;
    // const span = document.createElement("span");
    // toDos.newTodo
    // span.innerText = newTodo.text;
    // const button = document.createElement("button");
    // button.innerText = "❌"
    // button.addEventListener("click", deleteTodo);
    // li.appendChild(span);
    // li.appendChild(button);
    // toDoList.appendChild(li);
}

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     const newTodoObj = {
//         text: newTodo,
//         id: Date.now()
//     }
//     toDos.push(newTodoObj);
//     paintToDo(newTodoObj);
//     saveToDos();
// }

function handleSquat(event) {
    event.preventDefault();
    toDos["Squat"]++;
    paintToDo();
    saveToDos()
}

function handleBPress(event) {
    event.preventDefault();
    toDos["Bench Press"]++;
    paintToDo();
    saveToDos()
}

function handleRow(event) {
    event.preventDefault();
    toDos["Pendlay Row"]++;
    paintToDo();
    saveToDos()
}

function handleOPress(event) {
    event.preventDefault();
    toDos["Overhead Press"]++;
    paintToDo();
    saveToDos()
}

function handleDeadlift(event) {
    event.preventDefault();
    toDos["Deadlift"]++;
    paintToDo();
    saveToDos()
}

function handleDips(event) {
    event.preventDefault();
    toDos["Dips"]++;
    paintToDo();
    saveToDos()
}

function handlePullup(event) {
    event.preventDefault();
    toDos["Pull Up"]++;
    paintToDo();
    saveToDos()
}

//toDoForm.addEventListener("submit", handleToDoSubmit);
btnSquat.addEventListener("click", handleSquat);
btnBPress.addEventListener("click", handleBPress);
btnRow.addEventListener("click", handleRow);
btnOPress.addEventListener("click", handleOPress);
btnDeadlift.addEventListener("click", handleDeadlift);
btnDips.addEventListener("click", handleDips);
btnPullup.addEventListener("click", handlePullup);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
//     parsedToDos.forEach(paintToDo);
    paintToDo();
}