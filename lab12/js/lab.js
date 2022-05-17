// Summary: Lab 12: Conditionals
// Description: Create a function that depends on conditionals
// @author Alejandra Sicairos and Alice Aiba
// @created  5.16.22

// Create a function sortingHat()
function sortingHat(str) {
  // counts the letters in str and assigns it to a variable length
  var length = str.length;
  console.log(length);
  // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  var remainder = length % 4;
  if (remainder == 0){
    return ("Slytherin");
  }else if (remainder == 1) {
    return ("Gryffindor");
  }else if (remainder == 2){
    return ("Hufflepuff");
  }else{
    return ("Ravenclaw");
  }
}
//Runs the function after hitting Submit
$("#button").click(function(){
  var input = $("#input").val();
  console.log(input);
  var output = sortingHat(input);
  console.log(output);
  $("#output").html("The Sorting Hat has sorted you into " + output);
})
