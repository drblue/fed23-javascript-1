import { NewTodo, Todo } from './types';

/**
 * Create a new todo in the API
 */
export const createTodo = async (newTodo: NewTodo) => {
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
export const fetchTodos = async () => {
	const res = await fetch("http://localhost:3001/todos");
	if (!res.ok) {
		throw new Error(`Could not fetch todos. Status code was: ${res.status}`);
	}

	const data: Todo[] = await res.json();
//      ^?

	return data;
}
