const todos = [];
document.getElementById("editValue").style.display = "none";

const addTodo = () => {
  let todoName = document.getElementById("todo_name").value.trim();
  if (todoName === "") return;
  todos.push(escapeHtml(todoName));
  getTodos();
  document.getElementById("todo_name").value = "";
};

const getTodos = () => {
  let todoItems = "";
  todos.forEach((todo, index) => {
    todoItems += `
      <li>
      ${todo} <input type="submit" value="Delete" onclick="deleteTodo(${index})"> <input type="submit" value="Edit" onclick="showEditForm(${index}, '${todo}')"> 
      </li>
    `;
  });
  document.getElementById("todoList").innerHTML = todoItems;
};

const deleteTodo = (index) => {
  document.getElementById("editValue").style.display = "none";
  todos.splice(index, 1);
  getTodos();
};

const showEditForm = (index, todo) => {
  document.getElementById("editValue").style.display = "inline";
  document.getElementById("edit_todo").value = todo;
  document.getElementById("hidd_key").value = index;
};

const editTodo = () => {
  let todoNew = document.getElementById("edit_todo").value.trim();
  let todoKey = document.getElementById("hidd_key").value;
  if (todoNew === "") return;
  todos[todoKey] = escapeHtml(todoNew);
  getTodos();
  document.getElementById("editValue").style.display = "none";
};

const escapeHtml = (text) => {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};
