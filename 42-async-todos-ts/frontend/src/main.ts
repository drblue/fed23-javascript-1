import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;
const formCreateTodoEl = document.querySelector<HTMLFormElement>("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector<HTMLInputElement>("#inputNewTodoTitle");

interface Todo {
	id: number
	title: string
	completed: boolean
}

let todos: Todo[] = [];
//     ^?

/**
 * Fetch todos from API
 */
const fetchTodos = async () => {
	const res = await fetch("http://localhost:3001/todos");
	if (!res.ok) {
		throw new Error(`Could not fetch todos. Status code was: ${res.status}`);
	}

	const data: Todo[] = await res.json();
//      ^?

	return data;
}

/**
 * Get todos from server, update local copy and render todos
 */
const getAndRenderTodos = async () => {
	// Fetch todos from server and updates local copy
	todos = await fetchTodos();

	// Render dem todos
	renderTodos();
}

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

// Get and render todos on page load
getAndRenderTodos();
