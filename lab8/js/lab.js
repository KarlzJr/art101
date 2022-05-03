// Summary: Lab 8: Anon Functions and Callbacks
// Description: Experiment with JavaScript Functions and Callbacks
// @author Alejandra Sicairos and Alice Aiba
// @created  5.2.22

//@param: int/number
//@output: true or false
function isOdd(x){
  return (x % 2 != 0);
}

// testing function
var testingOdd1 = isOdd(1);

var array = [35, 888, 2510, 7, 202201, 300, 99];

var oddResult = array.map(isOdd);

var result = array.map(function(x){
    return x / 5;
})

//Shows in Console
console.log("Is 1 odd?", isOdd(1));
console.log("Is 2 odd?", isOdd(2));
console.log("My Array", array);
//returns [true, false, false, true, true, false, true]
console.log("Test for oddness of array:", oddResult);
//returns [7, 177.6, 502, 1.4, 40440.2, 60, 19.8]
console.log("Divisible of five array:", result);

//displays on the website
var outputEl = document.getElementById("output");
outputEl.innerHTML =
    "1 is odd: " + isOdd(1) + "<br>" +
    "2 is odd: " + isOdd(2) + "<br>" +
    "My number array: " + array + "<br>" +
    "Oddness test of array: " + oddResult + "<br>" +
    "Our number array divided by 5: " + result + "<br>";
outputEl.style.color = "#c8a2f5"
