/**
 * DOM 102 + events
 *
 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists
 */

// Listen for click-events on the "Add"-button
document.querySelector('#add').addEventListener("click", () => {
	// GET reference to ALL `li` elements and the LENGTH of that list (array)
	const liCount = document.querySelectorAll("li").length;

	document.querySelector("ul").innerHTML += `<li>list item ${liCount + 1}</li>`;
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
})
