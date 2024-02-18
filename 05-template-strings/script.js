let test = "JavaScript 101";
let student = "Newbie Coder";
let points = 1337;

// String Concatenation
// let msg = "Hi " + student + ", your results on " + test + " was " + points + " points.";
// console.log(msg);

// ES6 Template Literals (Template Strings)
let msg = `Hi "${student}", your results on '${test}' was ${points} points.`;
console.log(msg);

/*
let html = "<article>" +
           "  <p>Lorem ipsum dolor simet.</p>" +
           "</article>";
*/

let html = `<article>
				<p>"Template Strings", they're awesome!</p>
			</article>`;
