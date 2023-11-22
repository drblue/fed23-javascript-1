/**
 * Simple Todos
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
const todos = [
	{
		title: "Eat",
		completed: false,
	},
	{
		title: "Code",
		completed: true,
	},
	{
		title: "Sleep",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
	{
		title: "Find more memes",
		completed: true,
	},
];

const sortTodos = () => {
	// Sort todos by title
	todos.sort((a, b) => {
		// Support for international characters (well, almost, if you run Swedish as your browser locale)
		return a.title.localeCompare(b.title, "sv");

		/*
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1;
		}

		if (a.title.toLowerCase() > b.title.toLowerCase()) {
			return 1;
		}

		return 0;
		*/
	});
}

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

	// Create a new todo-object
	const newTodo = {
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

	// Clear any existing listitems from the DOM
	todolistEl.innerText = "";

	// Loop over the todos-array and create a new
	// listitem for each todoitem
	todos.forEach((todo) => {
		/*
		const cssCompleted = todo.completed ? "completed" : "";

		todolistEl.innerHTML += `
			<li class="list-group-item ${cssCompleted}">
				${todo.title}
			</li>
		`;
		*/

		// create a new li element
		const todoEl = document.createElement("li");
		todoEl.innerText = todo.title;
		todoEl.classList.add("list-group-item");

		if (todo.completed) {
			todoEl.classList.add("completed");
		}

		// append the new li element to the ul element
		todolistEl.append(todoEl);
	});
}

// Render the initial representation of the todos-array
renderTodos();
