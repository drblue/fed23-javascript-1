import { createTodo, fetchTodos } from './api';
import { NewTodo, Todo } from './types';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;
const formCreateTodoEl = document.querySelector<HTMLFormElement>("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector<HTMLInputElement>("#inputNewTodoTitle");

let todos: Todo[] = [];
//     ^?

/**
 * Get todos from server, update local copy and render todos
 */
const getAndRenderTodos = async () => {
	try {
		// Fetch todos from server and updates local copy
		todos = await fetchTodos();

		// Render dem todos
		renderTodos();

	} catch (err) {
		alert("Could not get todos, try again later?");
	}
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

	try {
		// POST todo to the API
		await createTodo(newTodo);

		// Get the updated list of todos from the API
		getAndRenderTodos();

		// Finally, clear the input-field
		if (inputNewTodoTitleEl) {
			inputNewTodoTitleEl.value = "";
		}
	} catch (err) {
		alert("Could not create todo. Please give the server a hug.");
	}
});

// Get and render todos on page load
getAndRenderTodos();
