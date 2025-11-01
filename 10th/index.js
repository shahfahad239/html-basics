document.write(
  "With the help of Almighty Allah I'm planning to learn JavaScript as soon as possible"
);
document.getElementById("heading").innerHTML =
  "Allahdulillah my first webpage using JavaScript";
//This function will print this text in the console of browser
console.log("JavaScript is client side programming language");
var info =
  "My name is Shah Fahad and I've started learning JavaScript by the grace of Almighty Allah";
document.getElementById("h3").innerHTML = info;
console.log(info);

var studdents = ["Haroon", "Hammad", "Ghalib", "Tehseen", "Waleed"];
document.getElementById("h2").innerHTML = studdents[3];
console.log(studdents[4]);
studdents[1] = "Zahid";
console.log(studdents[1]);
var name = window.prompt("Please enter your name");
document.getElementById("h4").innerHTML = "Welcome " + name + " to JavaScript";

function sum(i1, i2){
  console.log(i1 + i2);
  return (i2 + i2)
}
var result = sum(23, 22)
document.getElementById("addition").innerHTML = "Addition :" + " " + result

function sub(i1, i2){
  return (i1 - i2)
}
 var result2 = sub (43, 25)
 document.getElementById("subtraction").innerHTML = "Subtraction :" + " " + result2

 function product(i1, i2) {
  return(i1 * i2)
 }
var result3 = product(9, 9)
document.getElementById("multiplication").innerHTML = "Multiplication :" + " " + result3

function divi(i1, i2) {
  return(i1 / i2)
}
var result4 = divi(48, 6)
document.getElementById("division").innerHTML = "Division :" + " " + result4

function mod(i1, i2){
  return(i1 % i2)
}
var result5 = mod(94, 7.6)
document.getElementById("modulus").innerHTML = "Modulus :" + " " + result5