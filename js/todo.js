const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//업데이트가 가능하게 하기 위해 const 에서 let으로 변경
let toDos = [];

function saveToDos() {
    //stringify : 자바스크립트 오브젝트나 배열 또는 어떤 자바스크립트 코드를 string으로 만들어줌.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //local storage에도 삭제 반영을 하기 위한 구문
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  //데이터베이스에 to do 내용을 추가하는 곳
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    //javascript object를 받아옴(저장된 값)
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //각 배열에 있는 각각의 아이템(요소)에 대해서 실행
  parsedToDos.forEach(paintToDo);
}