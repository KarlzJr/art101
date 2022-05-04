// Summary: Lab 9: JavaScript for the Web
// Description: Experiment with DOM manipulation.
// @author Alejandra Sicairos and Alice Aiba
// @created  5.3.22

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");
// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");
// Change the html attribute of new1El to say something new.
new1El.innerHTML = "Hi this is Alice.";
// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");
// Change the html attribute of new2El to say something else.
new2El.innerHTML = "Hi this is Alejandra.";
// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
