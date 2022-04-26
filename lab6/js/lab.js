// Summary: Lab 6: Arrays and Objects
// Description: Experiment with basic JavaScript data types and variables.
// @author Alejandra Sicairos and Alice Aiba
// @created  4.25.22

//REMEMBER TO PUT A SEMICOLON AT THE END OF EVERY LINE!

//Declare array myTransport
var myTransport = ['bike', 'bus', 'walking', 'car'];

//Declare object myMainRide
var myMainRide = {
    make: "Mercedes",
    model: "C230 Kompressor",
    color: "Black",
    year: 2005,
    age: function() {
        return 2022 - myMainRide.year;
    }
}
//Output
document.writeln('My kinds of transports: ' + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
