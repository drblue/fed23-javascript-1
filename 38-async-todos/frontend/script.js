/**
 * Async Todos
 *
 * 1. Skriv funktionen `fetchTodos()` som gör en GET till `http://localhost:3001/todos`,
 *    översätter från JSON till JavaScript-array och returnerar den.
 *
 * 2. Skriv funktionen `getTodos()` som kallar på `fetchTodos()`, väntar på den och tar
 *    datan och skriver över `todos`. Därefter kallar den på `renderTodos()`.
 *
 * 3. Ändra i click-handlern så att när man klickar på en knapp så skickas det en
 *    DELETE-request till `http://localhost:3001/todos/<id>`, väntar på svaret och
 *    därefter (om den lyckades) kallar på `getTodos()`.
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");  // incomplete todos
const completedTodolistEl = document.querySelector("#completed-todolist");  // completed todos
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
let todos = [];

const sortTodos = () => {
	// Sort todos by title
	todos.sort((a, b) => {
		// Support for international characters
		return a.title.localeCompare(b.title, "sv");
	});
}

// Get all todos lists and listen for clicks
document.querySelectorAll("ul.todos").forEach(listEl => {

	// Listen for click-events on the list
	listEl.addEventListener("click", async (e) => {
		if (e.target.tagName === "SPAN") {
			// Toggle todo

			// get the `data-todo-id` attribute from the parent (LI) element
			const parentLiEl = e.target.parentElement;
			const clickedTodoId = Number(parentLiEl.dataset.todoId);  // convert to a number

			// Search todos for the todo with the title `clickedTodoTitle`
			const clickedTodo = todos.find(todo => {
				return (todo.id === clickedTodoId);
			});

			// If no todo was found, bail
			if (!clickedTodo) {
				console.log("Could not find todo with the clicked id:", clickedTodoId);
				return;
			}

			// Ask API to update the todo (only send in the `completed` attribute)
			await updateTodo(clickedTodoId, { completed: !clickedTodo.completed });

			// Get the updated list of todos from the API
			getTodos();

		} else if (e.target.tagName === "BUTTON") {
			// Delete todo

			// Get parent element (`<li>`) to the button
			const parentLiEl = e.target.parentElement;

			// Get the `data-todo-id` attribute from the parent
			const clickedTodoId = Number(parentLiEl.dataset.todoId);

			// Ask API to delete the todo
			await deleteTodo(clickedTodoId);

			// Get the updated list of todos from the API
			getTodos();
		}
	});
});

// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", async (e) => {
	// Stop form from being submitted to the server
	// and causing a page reload
	e.preventDefault();

	// Get title from input-field
	const newTodoTitle = inputNewTodoTitleEl.value;

	// Abort if input is empty
	if (newTodoTitle === "") {
		return;
	}

	// Create a new todo-object
	const newTodo = {
		title: newTodoTitle,
		completed: false,
	}
	console.log("Will send newTodo to API:", newTodo);

	// POST todo to the API
	await createTodo(newTodo);

	// Get the updated list of todos from the API
	getTodos();

	// Finally, clear the input-field
	inputNewTodoTitleEl.value = "";
});

// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Sort our todos before rendering them
	sortTodos();

	// Render all incomplete todos
	todolistEl.innerHTML = todos
		.filter(todo => {
			return !todo.completed;
		})
		.map(todo => {
			return `<li class="list-group-item" data-todo-id="${todo.id}">
						<span class="todo-title">${todo.title}</span>
						<button class="ms-1 btn btn-danger btn-sm">🚮</button>
					</li>`;
		})
		.join("");

	// Render all completed todos
	completedTodolistEl.innerHTML = todos
		.filter(todo => {
			return todo.completed;
		})
		.map(todo => {
			return `<li class="list-group-item completed" data-todo-id="${todo.id}">
						<span class="todo-title">${todo.title}</span>
						<button class="ms-1 btn btn-danger btn-sm">🚮</button>
					</li>`;
		})
		.join("");
}

// Fetch todos from the API and return them
const fetchTodos = async () => {
	const res = await fetch("http://localhost:3001/todos");
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`);  // "404 Not Found"
	}

	const data = await res.json();

	return data;
}

// Create a new todo in the API
const createTodo = async (newTodo) => {
	const res = await fetch("http://localhost:3001/todos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newTodo),
	});

	// Check that everything went ok
	if (!res.ok) {
		alert("Could not create todo! 🥺");
		console.log("Could not create todo:", res);
		return;
	}

	// Get response-body
	const data = await res.json();
	console.log("Gots data back:", data);
}

// Delete a todo in the API
const deleteTodo = async (id) => {
	// Send DELETE-request to API for this todo
	const deleteResponse = await fetch("http://localhost:3001/todos/" + id, {
		method: "DELETE",
	});

	// Was delete successful?
	if (!deleteResponse.ok) {
		alert("Could not delete todo. Maybe someone else already deleted it? Try reloading the page or check the server");
		console.log("Failed to delete todo. Response was:", deleteResponse);
		return;
	}
}

// Update a todo in the API
const updateTodo = async (id, data) => {
	// Send updated todo to the API
	const patchResponse = await fetch("http://localhost:3001/todos/" + id, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	// Was patch successful?
	if (!patchResponse.ok) {
		alert("Could not patch todo. Maybe someone deleted it? Try reloading the page or check the server");
		console.log("Failed to patch todo. Response was:", patchResponse);
		return;
	}
}

// Get todos, replace existing todos and then render the todos
const getTodos = async () => {
	// Fetch todos from API
	const data = await fetchTodos();

	// Replace existing todos-array with the todos from the API
	todos = data;

	// Render the todos
	renderTodos();
}

// Render the initial representation of the todos-array
getTodos();
