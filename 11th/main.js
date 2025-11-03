function result(grade) {
  if (grade == "A") {
    console.log("Outsading result");
    return "Outsading result";
  } else if (grade == "B") {
    console.log("Excellent result");
    return "Excellent result";
  } else if (grade == "C") {
    console.log("Average result");
    return "Average result";
  } else if (grade == "D") {
    console.log("Needs improvement");
    return "Needs improvement";
  } else if (grade == "F") {
    console.log("You are failed, You have to appeare again in  the exam");
    return "You are failed, You have to appeare again in  the exam";
  }
}

var exam = result("F");
document.getElementById("h2").innerHTML = "RESULT :" + " " + exam;

var exams = "";

switch (exams) {
  case "A":
    var grade = "Outstanding result";
    console.log("Outstanding result");
    break;
  case "B":
    var grade = "Excellent result";
    console.log("Excellent result");
    break;
  case "C":
    var grade = "Average result";
    console.log("Average result");
    break;
  case "D":
    var grade = "Needs improvement";
    console.log("Needs improvement");
    break;
  case "F":
    var grade = "You are failed, You have to reappear in the exam";
    console.log("You are failed, You have to reappear in the exam");
    break;
  default:
    var grade = "Result isn't declared yet";
    console.log("Result isn't declared yet");
}
document.getElementById("h3").innerHTML = "RESULT :" + " " + grade;

var students = [
  " Fahad ",
  " Umer ",
  " Ghalib ",
  " Sawar ",
  " Sanan ",
  " Raza ",
  " Murtaza ",
  " Hassan ",
];

var count = 0;
while (count <= 7) {
  console.log(students[count]);
  count = count + 1;
}

document.getElementById("h4").innerHTML = "While loop:" + " " + students;
for (var i = 0; i <= 7; i++) {
  console.log(students[i]);
}

document.getElementById("h5").innerHTML = "For loop:" + " " + students;

for (let i = 2; i <= 20; i += 2){
    console.log("Even numbers", i)
}
var odd = 1
while (odd <= 20) {
    console.log("Odd numbers", odd)
    odd = odd += 2; 
}

