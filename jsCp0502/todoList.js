const todoList = document.getElementById("todo_list");
const todoForm = document.getElementById("todo_form");

let arrList = [];

//localstorage에 저장
const saveList = function () {
  const stringList = JSON.stringify(arrList);
  localStorage.setItem('toDoList', stringList)
};

const loadList = function() {
  const toDoList = localStorage.getItem('toDoList');
  if (toDoList !== null) {
    arrList = JSON.parse(toDoList);
    displayList();
  }
}
loadList();
//리스트 삭제 함수
const handleTodoDelete = function (clickedID) {
  arrList = arrList.filter(function (todo) {
    //클릭한 id와 todoID와 같지 않다면 배열에서 제외
    return todo.todoID !== clickedID;
  });
  displayList();
  saveList();
};

//리스트 클릭 시 리스트 상태 변경
const handleTodoCheck = function (clickedID) {
  arrList = arrList.map(function (todo) {
    if (todo.todoID === clickedID) {
      return {
        ...todo,
        todoDone: !todo.todoDone,
      };
    } else {
      return todo;
    }
  });
  displayList();
  saveList();
};

//리스트가 화면에 보이게
function displayList() {
  todoList.innerHTML = "";
  arrList.forEach(function (todo) {
    let li = document.createElement("li");
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";
    li.textContent = todo.todoText;
    if (todo.todoDone) {
      li.classList.add("done");
    } else {
      li.classList.add("yet");
    }
    deleteBtn.title = "삭제";
    li.addEventListener("click", function () {
      handleTodoCheck(todo.todoID);
    });
    deleteBtn.addEventListener("click", function () {
      handleTodoDelete(todo.todoID);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
};

todoForm.addEventListener("submit", function (event) {
  //새로고침 시 텍스트창 초기화
  event.preventDefault();

  const addList = {
    todoText: todoForm.todo.value,
    todoID: new Date().getTime(),
    todoDone: false,
  };

  todoForm.todo.value = "";
  arrList.push(addList);

  displayList();
  saveList();
});
