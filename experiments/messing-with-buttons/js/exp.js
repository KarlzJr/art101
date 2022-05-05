//Find the Element
var button = document.getElementById("my-button");
console.log("button: ", button);
//Create an event handler within the JS file that listens for a button click.
button.onclick = function(){
	//When the button is pushed, prompt the user to input their name with the prompt() function.
	var inputEl = document.getElementById("my-input");
    var name = inputEl.value;
	//Use this input to change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
    var titleEl = document.getElementById("title");
    titleEl.innerHTML = "Hello " + name;
};
