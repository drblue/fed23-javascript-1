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

interface NewTodo {
	title: string
	completed: boolean
}

let todos: Todo[] = [];
//     ^?

/**
 * Create a new todo in the API
 */
const createTodo = async (newTodo: NewTodo) => {
	const res = await fetch("http://localhost:3001/todos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newTodo),
	});

	if (!res.ok) {
		throw new Error(`Could not create todo. Status code was: ${res.status}`);
	}
}

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

/**
 * Listen for create todo form submit
 */
formCreateTodoEl?.addEventListener("submit", async (e) => {
	// Stop form from being submitted to the server
	// and causing a page reload
	e.preventDefault();

	// Get title from input-field (default to empty string if element does not exist)
	const newTodoTitle = inputNewTodoTitleEl?.value || "";

	// Abort if input is empty
	if (newTodoTitle.length < 3) {
		alert("That's not a todo");
		return;
	}

	// Create a new todo-object
	const newTodo: NewTodo = {
		title: newTodoTitle,
		completed: false,
	}
	console.log("Will send newTodo to API:", newTodo);

	// POST todo to the API
	await createTodo(newTodo);

	// Get the updated list of todos from the API
	getAndRenderTodos();

	// Finally, clear the input-field
	if (inputNewTodoTitleEl) {
		inputNewTodoTitleEl.value = "";
	}
});


// Get and render todos on page load
getAndRenderTodos();
