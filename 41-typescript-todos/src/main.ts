/**
 * TypeScript Todos
 *
 * Steg 1
 * Lägg till funktionalitet för att radera en todo (antingen med findIndex/splice)
 * eller array-filter
 *
 * Steg 2
 * Lägg till funktionalitet så man kan skapa en ny todo med hjälp av formuläret
 * `formCreateTodoEl` och input-elementet `formCreateTodoEl`.
 *
 */

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

interface Todo {
	id: number
	title: string
	completed: boolean
}

let todos: Todo[] = [
	{ id: 1, title: "Wake up", completed: true },
	{ id: 2, title: "Drink coffee", completed: true },
	{ id: 3, title: "Code", completed: false },
	{ id: 4, title: "Sleep", completed: false },
];

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

todolistEl.addEventListener("click", (e) => {
	console.log("You clicked, wow", e.target);
	const target = e.target as HTMLElement;

	if (target.tagName === "SPAN") {
		// toggle todo

		// get id of todo
		const todoId = Number(target.parentElement?.dataset.todoId); // data-todo-id=""

		// find the todo with the id
		const clickedTodo = todos.find(todo => todo.id === todoId);
//                 ^?

		// toggle the todo
		if (clickedTodo) {
			// clickedTodo will always be of type `Todo` here and not `Todo | undefined` as otherwise the expression would evaluate to false
			clickedTodo.completed = !clickedTodo.completed
//               ^?
		}

		// re-render the todos list
		renderTodos();

	} else if (target.tagName === "BUTTON") {
		// delete todo

		// get id of todo
		const todoId = Number(target.parentElement?.dataset.todoId); // data-todo-id=""

		// filter todos and exclude the todo we want to delete
		todos = todos.filter(todo => todo.id !== todoId);

		// re-render the todos list
		renderTodos();
	}
});

renderTodos();
