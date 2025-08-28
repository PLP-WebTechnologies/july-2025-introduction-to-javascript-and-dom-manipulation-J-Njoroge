// Part 1: JavaScript Basics
// Variable declarations
let userName = "Jane";
let userAge = 20;

// Conditional Example
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}


// Part 2: Functions
// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total:", calculateTotal(50, 3)); // Example usage

// Function to format a string
function greetUser(name) {
  return "Hello, " + name + "!";
}
console.log(greetUser("Jane"));



// Part 3: Loops
// For loop: countdown
for (let i = 5; i > 0; i--) {
  console.log("Countdown: " + i);
}

// While loop: print array items
let fruits = ["Apple", "Banana", "Cherry"];
let index = 0;
while (index < fruits.length) {
  console.log("Fruit:", fruits[index]);
  index++;
}


// Part 4: DOM Manipulation
// 1. Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("output").textContent = "The text has been changed!";
});

// 2. Toggle a CSS class
document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.getElementById("main-title").classList.toggle("red");
});

// 3. Add new item to list
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("itemList").appendChild(newItem);
});
