// Summary: Lab 11: Libraries & jQuery
// Description: Experiment with jQuery
// @author Alejandra Sicairos and Alice Aiba
// @created  5.10.22

$("#content p").append("<button>Press");

$("button").click(function(){
  $("#content p").toggleClass("selected")
});

$("button").click(function(){
  $("button").toggleClass("buttselected")
});
