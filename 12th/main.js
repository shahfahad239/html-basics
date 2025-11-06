for (let i = 0; i <= 30; i++ ) {
    console.log(i * i)
}

for (let i = 10; i >= 0; i--) {
    console.log(i)
} 

for (let i = 1; i <= 10; i++){
    console.log(7 * i)
}

let sum = 0;
for (let i = 2; i <= 50; i += 2){
    sum += i
}
 console.log(sum)

let str = ['Fahad']

 function printArrayelements(array) {
    let reversed = [];
    for (let i = array.length ;i >= 0; i--) {
        reversed.push(array[i])
     console.log(array[i])   
     }
     return reversed;
    }

    printArrayelements(["Fahad","Umer","Ghalib"])

    var btn = document.getElementById("btn")
    var h1 = document.getElementById("heading")

    function clickhandler() {
        h1.innerHTML = "Welcome to JavaScript! Shah Fahad"
        
    }
    btn.addEventListener("click", clickhandler)

    var input = document.getElementById("input")
    var h2 = document.getElementById("h2")
function click() {
    h2.innerHTML = "...Typing..."
    }
    input.addEventListener("keydown",click )

    function EvenOdd(num) {
        if (num % 2 === 0 ) {
            return "Even"
        } else {
            return "Odd"
        }
    }

    console.log(EvenOdd(23))