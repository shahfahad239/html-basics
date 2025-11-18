function sum(a, b) {
  return a + b;
}

console.log(sum(4, 5));

function printGreetings(firstName, lastName, callback) {
  let fullName = firstName + " " + lastName;
  console.log(callback(fullName));
}
let greetings = (name) => "Hello " + name;

printGreetings("Shah", "Fahad", greetings);

function createGreetings(greetings) {
  return (name) => {
    console.log(greetings + " " + name);
  };
}

let sayHello = createGreetings("Hello");
let sayHi = createGreetings("Hi");

sayHello("Shah Fahad");
sayHi("Shah Umer");

let cars = [
  ["Porshe", "Mercedes", "Bugati"],
  ["Honda", "Toyota", "Hyundai"],
];

console.log(cars[1][1]);
let book = {
  tilte: "A Games of thrones",
  author: {
    firstName: "George",
    middleNmae: "Raymond",
    lastName: "Martin",
    fullName: "George Raymond Martin",
  },
  yearPublished: 1996,
  publish: function () {
    console.log("This book is published in 1996");
  },
};

console.log(book.author.fullName);
book.publish();

function season(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Invalid Month";
  }
}

console.log(season(15));

let button = document.getElementById("btn");

button.addEventListener("click", function () {
  window.location = "https://www.youtube.com";
});

setInterval(function () {
  let date = new Date();
  document.getElementById("setDate").innerHTML = date;
}, 1000);
