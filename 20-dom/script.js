/**
 * DOM - Document Object Model
 *
 */

/*
const firstLink = document.querySelector('#link-1');

// Get the element's parent
const firstLinkParent = firstLink.parentElement;

// Get the parent's next sibling
const firstLinkParentNextSibling = firstLinkParent.nextElementSibling;

// Get the first paragraph on the page
const firstParagraph = document.querySelector('p');

// Log the first paragraphs HTML
console.log(firstParagraph.innerHTML);

// Log the first paragraphs text
console.log(firstParagraph.innerText);

// Get the first paragraph with 'error'-class on the page
const firstErrorParagraph = document.querySelector('p.error');

// Log the first error-paragraphs HTML
console.log(firstErrorParagraph.innerHTML);

// Log the first error-paragraphs text
console.log(firstErrorParagraph.innerText);

// We can also change the content of an element
firstParagraph.innerText = "Look ma, my first paragraph!";
firstParagraph.innerText += " Oh I forgot this!";
*/

/*
const alertEl = document.querySelector(".alert");
console.log('alertEl:', alertEl);

console.log('alertEl innerHTML:', alertEl.innerHTML);
console.log('alertEl innerText:', alertEl.innerText);
console.log('alertEl textContent:', alertEl.textContent);
*/

// Change content
// alertEl.innerText = "Such error, much danger, very fail";
// alertEl.innerText = "Such <strong>error</strong>, much danger, very fail";
// alertEl.innerHTML = "Such <strong>error</strong>, much danger, very fail";

// Say hi to the user
/*
const h2El = document.querySelector("h2#greetings");
const username = prompt("What are thy name?");
// h2El.innerHTML = `Hello ${username}`; // BIG NO-NO!
h2El.innerText = `Hello ${username}`;
*/

/*
const linkListEl = document.querySelector('ul');
console.log('linkListEl:', linkListEl.children);  // HTMLCollection, does not have `.forEach()`-method

// Convert HTMLCollection to Array
const liEls = Array.from(linkListEl.children);  // now we can use `.forEach()`

// OR, we can use querySelector and querySelectorAll on the linkListEl
const liEls2 = linkListEl.querySelectorAll('li');
*/

// Get and set attributes
// document.querySelector("img").getAttribute("src")
// document.querySelector("img").setAttribute("src", "https://media.tenor.com/tNGtfhqJWP0AAAAd/haxor.gif")

const btnPopupEl = document.querySelector("button");
console.log("Such button text:", btnPopupEl.innerText);

btnPopupEl.addEventListener("click", () => {
	alert("Stop it, that ticles! 😂");
});

const btnSayHiEl = document.querySelector("#btnSayHi");
const inputNameEl = document.querySelector("#inputName");

btnSayHiEl.addEventListener("click", () => {
	// Get user name
	const inputName = inputNameEl.value;

	// Say hi to the nice user
	alert(`Hi ${inputName}`);
});
