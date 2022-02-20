const todos = [];
document.getElementById("editValue").style.display = "none";

const addTodo = () => {
  let todoName = document.getElementById("todo_name").value.trim();
  todos.push(todoName);
  getTodos();
};

const getTodos = () => {
  let todoItems = "";
  setTimeout(() => {
    todos.forEach((todo, index) => {
      todoItems += `
        <li>
        ${todo} <input type="submit" value="Delete" onclick="deleteTodo(${index})"> <input type="submit" value="Edit" onclick="showEditForm(${index}, '${todo}')"> 
        </li>
      `;
    });
    document.getElementById("todoList").innerHTML = todoItems;
  }, 100);
};

const deleteTodo = (index) => {
  setTimeout(() => {
    document.getElementById("editValue").style.display = "none";
    todos.splice(index, 1);
    getTodos();
  }, 100);
};

const showEditForm = (index, todo) => {
  setTimeout(() => {
    document.getElementById("editValue").style.display = "inline";
    document.getElementById("edit_todo").value = todo;
    document.getElementById("hidd_key").value = index;
  }, 100);
};

const editTodo = () => {
  setTimeout(() => {
    let todoNew = document.getElementById("edit_todo").value;
    let todoKey = document.getElementById("hidd_key").value;
    todos[todoKey] = todoNew;
    getTodos();
  }, 100);
};
