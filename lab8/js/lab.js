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
console.log("Is 1 odd?", isOdd(1));
console.log("Is 2 odd?", isOdd(2));

var array = [35, 888, 2510, 7, 202201, 300, 99];
console.log("My Array", array);

var oddResult = array.map(isOdd);
// should return [true, false, false, true, true, false, true]
console.log("Test for evenness of array:", oddResult);

var result = array.map(function(x){
    return x / 5;
})
// should return [7, 177.6, 502, 1.4, 40440.2, 60, 19.8]
console.log("Divisible of five array:", result);
