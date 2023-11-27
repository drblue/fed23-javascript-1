/**
 * Better Todos
 *
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
let todos = [
	{
		id: 1,
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		id: 2,
		title: "Learn Array Methods",
		completed: false,
	},
	{
		id: 3,
		title: "Take over the world",
		completed: false,
	},
];

const sortTodos = () => {
	// Sort todos by title
	todos.sort((a, b) => {
		// Support for international characters
		return a.title.localeCompare(b.title, "sv");
	});
}

// Listen for click-events on `#todolist` (the `<ul>`)
todolistEl.addEventListener("click", (e) => {
	// console.log("You clicked on either the whole list, or one of its children", e.target);

	if (e.target.tagName === "SPAN") {
		// User clicked on a SPAN element
		// console.log("The clicked todo's title is:", e.target.innerText);
		const clickedTodoTitle = e.target.innerText;

		// Search todos for the todo with the title `clickedTodoTitle`
		const clickedTodo = todos.find(todo => {
			return (todo.title === clickedTodoTitle);
		});
		// console.log("Result from find:", clickedTodo);

		// If no todo was found, bail
		if (!clickedTodo) {
			console.log("Could not find todo with the clicked title:", clickedTodoTitle);
			// alert("Could not find todo with the clicked title!");
			return;
		}

		// Change (toggle) completed on the found todo
		clickedTodo.completed = !clickedTodo.completed;
		// console.log("Toggled completed on the clicked todo");

		// Render updated todos
		renderTodos();

	} else if (e.target.tagName === "BUTTON") {
		// User clicked on a BUTTON element
		// console.log("DELETE ALL THE THINGS!!!!!!!!!!!!", e.target);

		// Get parent element (`<li>`) to the button
		const parentLiEl = e.target.parentElement;

		// From the parent elements POV, get the element with the class `.todo-title`
		const todoTitleEl = parentLiEl.querySelector(".todo-title");

		// Get the `.todo-title` elements innerText
		const todoTitle = todoTitleEl.innerText;

		/*
		// Find index of todo in `todos` that has a matching title
		const index = todos.findIndex(todo => todo.title === todoTitle);
		// console.log("Found index of todo to remove by traversing a lot:", index);

		// Remove todo from todos by splicing
		todos.splice(index, 1);
		*/

		// Using filter to get all todos that are NOT matching the title of the
		// todo we want to remove
		todos = todos.filter(todo => todo.title !== todoTitle);

		// Render updated todos
		renderTodos();
	}
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

	// // Make sure we don't already have a todo with this title
	// // If we do, bail
	// // (we're not going to use this as we're going to learn about data-attributes)
	// const todoWithSameTitle = todos.find(todo => todo.title === newTodoTitle);
	// if (todoWithSameTitle) {
	// 	alert("That todo already exists!");
	// 	return;
	// }

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

	// 😤 Clear any existing listitems from the DOM
	// todolistEl.innerText = "";

	// Loop over the todos-array and add markup for a listitem
	// to an array, and then once we've looped, THEN output
	// the HTML to the DOM
	todolistEl.innerHTML = todos
		.map(todo => {
			const cssCompleted = todo.completed ? "completed" : "";
			return `<li class="list-group-item ${cssCompleted}">
						<span class="todo-title">${todo.title}</span>
						<button class="ms-1 btn btn-danger btn-sm">🚮</button>
					</li>`;
		})
		.join("");
}

// Render the initial representation of the todos-array
renderTodos();
