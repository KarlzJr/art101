// Summary: Lab 13: Loops
// Description: Experiment with loops.
// @author Alejandra Sicairos and Alice Aiba
// @created  5.24.22

function getAjax(str) {
    $("#output").html("");
    //the API needs it to be lowercase
	var pokemon = str.toLowerCase();

    //this is what lets the user choose their pokemon
	var endpoint = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    $.ajax({
      // API endpoint
      url: endpoint,
      // POST or GET request
      type: "GET",
    })
    .done(function(data) {
    console.log("works");
      $("#output").append("<img src=" + data.sprites.front_default + ">");
    })
    .fail(function(request, error) {
      $("#output").html("Error: Check Spelling");
    });
}

$("#activate").click(function(){
	var name = $("#input").val();
    getAjax(name);
});
