

$("button").on("click" ,function()
{
let input = prompt("Enter a List of NAMES Separated by COMMAS:"); 
let array = input. split(","); 
console. log(array);

var numberOfPeople = array.length;
var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
var payingPerson = array[randomPersonPosition];
alert(payingPerson +" is Going to Pay for Lunch Today!");
}   );

