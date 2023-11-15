/**
 * DOM 102 + events
 *
 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists
 *
 * document.createElement 	creates a new element of a specific type. does NOT add it to the DOM
 * parentEl.append(newEl) 	appends AFTER the last element INSIDE the element we select
 * parentEl.prepend(newEl) 	prepends BEFORE the first element INSIDE the element we select
 * element.remove()			removes the selected element from the DOM
 */

// Listen for click-events on the "Add"-button
document.querySelector('#add').addEventListener("click", () => {
	// GET reference to ALL `li` elements and the LENGTH of that list (array)
	const liCount = document.querySelectorAll("li").length;

	// Will **REPLACE** all content in the element with
	// a **NEW** _string_ that contains both the old and the new content
	// document.querySelector("ul").innerHTML += `<li>list item ${liCount + 1}</li>`;

	// ANOTHER way to create elements that does NOT replace the old content,
	// only appends it

	// Create a new `li` element and add some content
	const newLiEl = document.createElement("li");
	newLiEl.innerText = `list item ${liCount + 1}`;  // "list item 5"

	// Also add a click-event listener to the new listitem
	newLiEl.addEventListener("click", (e) => {
		console.log("yey you clicked on the NEW:", e.target);

		// if target has class `completed`, remove it
		// if target DOES NOT have class `completed`, add it
		e.target.classList.toggle("completed");
	});

	// Append the new element to the `ul` list
	document.querySelector("ul").append(newLiEl);
});

// Listen for click-events on the listitems
document.querySelectorAll("li").forEach(liEl => {
	// Add click-event handler to each listitem
	liEl.addEventListener("click", (e) => {
		console.log("yey you clicked on:", e.target);

		// if target has class `completed`, remove it
		// if target DOES NOT have class `completed`, add it
		e.target.classList.toggle("completed");
	});
});
