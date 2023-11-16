/**
 * Simple Todos
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");

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
];

// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", (e) => {
	// Stop form from being submitted to the server
	// and causing a page reload
	e.preventDefault();

	// Get title from input-field

	// Abort if input is empty

	// Create a new todo-object

	// Add it to the todos-array

	// Render a representation of the
	// updated todos-array

	// Finally, clear the input-field
});

// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Clear any existing listitems from the DOM

	// Loop over the todos-array and create a new
	// listitem for each todoitem
}

// Render the initial representation of the todos-array
