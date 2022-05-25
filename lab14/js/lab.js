// Summary: Lab 13: Loops
// Description: Experiment with loops.
// @author Alejandra Sicairos and Alice Aiba
// @created  5.23.22

//print num 1-any number selected, and random words inputted
function FizzBuzz(max, a, b, c){
  for (var i = 1; i <= max; i++){
    var str = i + ' ';

    //if divisable by 3 print fizz
    if (i % 2 == 0){
      str += a;
    }
    //if divisable by 5 print buzz
    if(i % 5 == 0){
      str += b;
    }
    // divisable by
    if (i % 9 == 0){
      str += c;
    }
    //make everything uppercase
    str = str.toUpperCase();
    str += "!";
    $("#output").append("<p>" + str +"</p>");
  }
}

$("#button").click(function(){
  //Clears output so that everytime button is clicked its the new number and doesnt add to it
  $("#output").empty();
  //input that lets users choose their amount of numbers
  var max = $("#max").val();
  var text1 = $("#text1").val();
  var text2 = $("#text2").val();
  var text3 = $("#text3").val();

  var output = FizzBuzz(max, text1, text2, text3);
})
