// Summary: Lab 11: Libraries & jQuery
// Description: Experiment with jQuery
// @author Alejandra Sicairos and Alice Aiba
// @created  5.10.22
var colors = ['red', 'blue', 'yellow', 'green', 'purple', '#c45672', 'brown'];
//var random_color = colors[Math.floor(Math.random() * colors.length)];

$("#content p").append("<button>Press");

$("button").click(function(){
  //$("#content p").toggleClass("selected")
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  $("#content p").css('color', random_color);
});

$("button").click(function(){
    var random_color = colors[Math.floor(Math.random() * colors.length)];
   $("button").css('color', random_color);
 });
