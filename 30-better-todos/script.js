/**
 * Better Todos
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

// Get all todos lists and listen for clicks
document.querySelectorAll("ul.todos").forEach(listEl => {

	// Listen for click-events on the list
	listEl.addEventListener("click", (e) => {
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

	/*
	// Find the highest ID for a todo
	let maxIdForEach = 0;
	todos.forEach(todo => {
		if (todo.id > maxIdForEach) {
			maxIdForEach = todo.id;
		}
	});

	// Find the highest ID for a todo using map + Math.max
	const allIds = todos.map(todo => {
		return todo.id;
	});
	const maxIdMath = Math.max( ...allIds );  // Have to spread the array as Math.max can't receive an array
	*/

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

	// 😤 Clear any existing listitems from the DOM
	// todolistEl.innerText = "";

	// // Get all incomplete (röda) todos
	// const incompleteTodos = todos.filter((todo) => {
	// 	return !todo.completed;
	// 	// return (todo.completed === false);

	// 	/*
	// 	if (todo.completed === false) {
	// 		return true; // is röd
	// 	} else {
	// 		return false; // is grön
	// 	}
	// 	*/
	// });

	// // Get all completed (gröna) todos
	// const completedTodos = todos.filter((todo) => {
	// 	return todo.completed;
	// });

	// Output (render) all incomplete (röda) todos
	todolistEl.innerHTML = todos
		.filter(todo => {
			return !todo.completed;
		})  // returnerar en ny array med alla incomplete todos
		.map(todo => {
			return `<li class="list-group-item" data-id="${todo.id}">
						<span class="todo-title">${todo.title}</span>
						<button class="ms-1 btn btn-danger btn-sm">🚮</button>
					</li>`;
		})
		.join("");

	// Output (render) all completed (gröna) todos
	completedTodolistEl.innerHTML = todos
		.filter(todo => {
			return todo.completed;
		})
		.map(todo => {
			return `<li class="list-group-item completed" data-id="${todo.id}">
						<span class="todo-title">${todo.title}</span>
						<button class="ms-1 btn btn-danger btn-sm">🚮</button>
					</li>`;
		})
		.join("");
}

// Render the initial representation of the todos-array
renderTodos();
