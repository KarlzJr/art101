// Summary: Lab 16: JSON and APIs
// Description: Experiment with processing JSON from an API.
// @author Alejandra Sicairos and Alice Aiba
// @created  5.27.22

//var endpoint = "https://xkcd.com/"+ num + "/info.0.json";

//default num
var num = 500;

function getAjax(num) {
	var endpoint = "https://xkcd.com/"+ num + "/info.0.json";
	//Clears the canvas
	$("#output").html("");
  $.ajax({
      // API endpoint
      url: endpoint,
      // Any data to send
    	data: { id: 2623},
      // POST or GET request
      type: "GET",
    })
    .done(function(data) {
      $("#output").append('<h3>' + data.title);
      $("#output").append("<img src=" + data.img + ">");
      $("#output").append('<br><p>' + data.alt);
    })
    .fail(function(request, error) {
      $("#output").html("Error");
    });
}

$("#random").click(function(){
	//Random Number
	var ranNum = Math.floor(Math.random() * 1000);
	getAjax(ranNum);
});

$("#next").click(function(){
	num += 1;
	//$("#output").html(num);
  getAjax(num);
});

$("#previous").click(function(){
	num -= 1;
	//$("#output").html(num);
  getAjax(num);
});
