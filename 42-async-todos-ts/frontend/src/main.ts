import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;
const formCreateTodoEl = document.querySelector<HTMLFormElement>("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector<HTMLInputElement>("#inputNewTodoTitle");

let todos = [];

/**
 * Render Todos to DOM
 */
const renderTodos = () => {
	todolistEl.innerHTML = todos
		.map(todo => `
			<li class="list-group-item ${todo.completed ? 'completed': ''}" data-todo-id="${todo.id}">
				<span class="todo-title" role="button">${todo.title}</span>
				<button class="ms-1 btn btn-danger btn-sm">🚮</button>
			</li>
		`)
		.join("");
}
