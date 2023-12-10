/**
 * Async Todos
 *
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");  // incomplete todos
const completedTodolistEl = document.querySelector("#completed-todolist");  // completed todos
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
let todos = [
	{
		id: 1,
		title: "Add boilerplate code for Async Todos",
		completed: true,
	},
	{
		id: 2,
		title: "Learn to write better placeholder text",
		completed: false,
	}
];

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
	listEl.addEventListener("click", (e) => {
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

			// Change (toggle) completed on the found todo
			clickedTodo.completed = !clickedTodo.completed;

			// Render updated todos
			renderTodos();

		} else if (e.target.tagName === "BUTTON") {
			// Delete todo

			// Get parent element (`<li>`) to the button
			const parentLiEl = e.target.parentElement;

			// Get the `data-todo-id` attribute from the parent
			const clickedTodoId = Number(parentLiEl.dataset.todoId);

			// Using filter to get all todos that are NOT matching the title of the
			// todo we want to remove
			todos = todos.filter(todo => todo.id !== clickedTodoId);

			// Render updated todos
			renderTodos();
		}
	});
});

// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", (e) => {
	// Stop form from being submitted to the server
	// and causing a page reload
	e.preventDefault();

	// Get title from input-field
	const newTodoTitle = inputNewTodoTitleEl.value;

	// Abort if input is empty
	if (newTodoTitle === "") {
		return;
	}

	// Find the highest ID for a todo using reduce
	const maxId = todos.reduce((maxId, todo) => {
		if (todo.id > maxId) {
			return todo.id;
		}
		return maxId;
	}, 0);

	// Create a new todo-object
	const newTodo = {
		id: maxId + 1,
		title: newTodoTitle,
		completed: false,
	}

	// Add it to the todos-array
	todos.push(newTodo);

	// Render a representation of the
	// updated todos-array
	renderTodos();

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

// Render the initial representation of the todos-array
renderTodos();
