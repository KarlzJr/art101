// Summary: Lab 10: JavaScript Events and Forms
// Description: Experiment with DOM manipulation.
// @author Alejandra Sicairos and Alice Aiba
// @created  5.9.22

//Borred from Wmodes.github.io
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
//Borred from Wmodes.github.io
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
//Borred from Wmodes.github.io
function randomizeName(userName) {
    // convert userName string to an array
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    // shuffle array with our shuffle function
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    // shift to Title Case (like a name)
    var newName = toTitleCase(shuffledString);
    // return array to a string
    return newName;
}

var button = document.getElementById("my-button");
console.log("button: ", button);
//Create an event handler within the JS file that listens for a button click.
button.onclick = function(){
	//Gets the value of your input field
	var inputEl = document.getElementById("my-input");
  var name = inputEl.value;
  //Runs that value through your sort() or anagram() function and saves the results
  var randoName = randomizeName(name);
	//Replaces the html in <div id=output> with the results.
  var outputEl = document.getElementById("output");
  outputEl.innerHTML = "New Name: " + randoName;
};
