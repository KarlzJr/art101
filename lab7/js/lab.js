// Summary: Lab 6: Arrays and Objects
// Description: Experiment with basic JavaScript data types and variables.
// @author Alejandra Sicairos and Alice Aiba
// @created  4.26.22

var userName = window.prompt("Hi. Please tell me your name so I can sort it.");
sortString(userName);
function sortString(s){
    //convert Str to array
    var array = s.split('');
    //Reverse String
    array.sort();
    // convert array back to string
    var newS = array.join('');
    //return string
    return newS;
}

//Output
document.writeln("Oh hey, I've sorted your name with no spaces to make it longer and unique!: ",
sortString(userName), "</br>");
