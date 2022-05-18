// Summary: Lab 13: Loops
// Description: Experiment with loops.
// @author Alejandra Sicairos and Alice Aiba
// @created  5.17.22

//print num 1-any number selected
function FizzBuzz(input){
  for (var i = 1; i <= input; i++){
    var str = i + '. ';

    //if divisable by 3 print fizz
    if (i % 2 == 0){
      str += "Fizz";
    }
    //if divisable by 5 print buzz
    if(i % 5 == 0){
      str += "Buzz";
    }
    // divisable by
    if (i % 9 == 0){
      str += "Bang";
    }
    // if (str == ''){
    //   console.log(i);
    // }else{
    //   //if divisable by 3 and 5 bring both fizz and buzz
    //   console.log(str);
    // }
    $("#output").append("<p>" + str +"</p>");
  }
}

$("#button").click(function(){
  //Clears output so that everytime button is clicked its the new number and doesnt add to it
  $("#output").empty();
  //input that lets users choose their amount of numbers
  var input = $("#input").val();
  var output = FizzBuzz(input);
})
