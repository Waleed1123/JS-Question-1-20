// Chapter 11 (Comparison Operators)

// 1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)

if (userName !== fullName) {
  // Not Equal Operator
}

// 2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.

var num = 15;
var num2 = 25;

if (num <= num2) {
  alert("greater");
}

// 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.

num = 15;

if (num != 25) {
  num = 25;
}

// 4. Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.

if (num != num2) {
  alert("congratulations");
}

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match"

var fullName = prompt("Enter Your Name");
if (fullName != "Waleed Ahmed") {
  alert("No Match");
}

// *********************************Next*******************************************

// Chapter 12 (if…else and else if statements)

// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.

if (num <= num2) {
  alert("Equal");
} else {
  alert("Not Equal");
}

// 2. Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)

var parcentage = prompt("Enter Your Percentage");

if (parcentage <= 0) {
  alert("Enter Vaild Value");
} else if (parcentage >= 90) {
  alert("A1+ Grade");
} else if (parcentage >= 80) {
  alert("A1 Grade");
} else if (parcentage >= 70) {
  alert("A Grade");
} else if (parcentage >= 60) {
  alert("B Grade");
} else if (parcentage >= 50) {
  alert("C Grade");
} else if (parcentage >= 40) {
  alert("D Grade");
} else if (parcentage >= 33) {
  alert("F Grade");
} else {
  alert("Fail");
}

// 3. This is the if statement that begins the code.
// if (a === 10) {
//  alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself

if (a === 10) {
  alert("a is 10");
} else {
  alert("a is not 10");
}

// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.

var city = prompt("enter city name");

if (city == "karachi") {
  alert("Karachi it is");
} else if (city == "lahore") {
  alert("lahore it is");
} else {
  alert("not vaild in other cities");
}

// *****************************Next Chapter*********************************

// Chapter 13 (Testing sets of conditions)

// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.

if (a == b && c == b) {
}

// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the same value as d.

if (a == b || c == d) {
}

// 3. Code the first line of an if statement that tests whether
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60

if (fullName == "Hamza" || (fullName == "Arsalan" && age > 60)) {
}

// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or
//  greater than the second variable, display an alert.

var num = 12;
var num1 = 20;

if (num < num1 || num > num1) {
  alert("Variable is working");
}
// 5. Declare 2 variables. Assign one of them your first name and the other one your last name. Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.

var firstName = "Waleed";
var lastName = "Ahmed";

var answer = prompt("Enter your Name.");

if (answer == firstName || answer == lastName) {
  console.log("Waleed hah Lala");
}

// *********************************** Next Chapter***************************

// Chapter 14 (If statements nested)

// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater
// than 5 then Alert "OK".

var password = +prompt("Enter Your Password");

if (password !== 0) {
  if (password <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// 2. Try this statement by yourself
// if (a === 1) {
// if (c === "Max") {
//  alert("OK");
//  }
// }

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) {
//  if (c === "Max") {
// alert("OK");
//  }
// }

if (a === 1 && c === "Max") {
  alert("OK");
}

// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.

var num = 20;
var num1 = 20;

if (num == num1) {
  if (num <= num1) {
    alert("Banda kam kar raha hah");
  }
}

// ************************************** Next Chapter *********************************

// Chapter 15 (Array I)

// 1. Declare an empty array.

var arr = [];

// 2. Code an array with 1 string element

var arr = ["waleed"];

// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert
// using array index

var alphabet = ["h", "i", "j", "k"];
console.log(alphabet[2]);

// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total
// length of array.

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];

console.log(alphabet.length);

// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element

var arr = ["waleed"];
arr[1] = " Ahmed";

alert(arr);
console.log(arr);

// ************************************** Next Chapter *********************************

// Chapter 16 (Array II)

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element

var arr = ["waleed"];
arr.push("Ahmed");

alert(arr);

// 2. var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();

console.log(Alphabet);

// 3. var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push("add", 25);

console.log(Alphabet);

// ************************************* Next Chapter ***************************************

// Chapter 16 (Array III)

// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

var arr = sizes.slice(3, 4);

console.log(arr);

// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.

var arr = ["Waleed"];
arr[1] = "Ahmed";

alert(arr[1]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

sizes.splice(2, 0, "L");

console.log(sizes);

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

var arr = sizes.splice(2, sizes.length);

console.log(arr);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".

var pets = ["dog", "cat", "ox", "duck", "frog"];

pets.splice(1, 3, "snake", "Mouse");

console.log(pets);

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".

var pets = ["dog", "cat", "ox", "duck", "frog"];

pets.splice(1, 2);
console.log(pets);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

var arr = pets.slice(3, 5);

console.log(arr);

// ************************************** Next Chapter ************************************

// Chapter 17 - 20 (for Loops)

// 1. Write a statement in which loop is to run 10 times

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2. Code the first line of a for loop with the usual counter name, usual
// starting value, and usual increment. Run it 12 times using <= to
// specify how many loops.

for (i = 0; i <= 11; i++) {
  console.log(i);
}

// 3. What are the 5 characters missing from this code, excluding any
// spaces that are missing? Type them in order, with no spaces or
// commas between them.
// for var i = 0 i <= 4 i++
// Note: Complete this statement by yourself

for (var i = 0; i <= 4; i++) {
  console.log(i);
}

// 4. Code the first line of a for loop with a counter name that's not i.
// Code the usual starting value and usual increment. Run it 100
// times using < to specify how many loops.

for (var j = 0; j < 100; j++) {
  console.log(j);
}

// 5. Code the first line of a for loop with the usual counter and the
// usual starting value. Run it 3 times using > to specify how many
// loops. Decrement it with each iteration.

for (var i = 3; i > 0; i--) {
  console.log(i);
}

// 6. The statement assigns the number of elements in the array to the
// variable.

var arr = ["waleed", "Ahmed"];
var firstName = arr[0];
console.log(firstName);

// 7. Set a variable named “flag” with an initial Boolean value of your
// choice.

var flag = true;

// 8. Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array pets

var pets = ["dog", "cat", "ox", "duck", "frog"];

for (var i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// 9. Coding Exercise:
// Set a for loop to run 10 iterations.
// On the second iteration, display the counter in an alert. (It should
// be 1.)
// Break out of the loop.

for (var i = 0; i < 10; i++) {
  if ((i = 1)) {
    alert("It Should be 1");
    console.log(i);
    break;
  }
}

// 10. Create an array which contains user names
// Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array user names.
// Code an if statement that tests the presense of (user name) in an array.
// If user name match Alert that "Enter". if not then alert ("Please write correct user name").

var userInput = prompt("Enter User name.");
var user = ["waleed", "ahmed", "ali", "sofiyan", "tayyab"];
var found = false;

for (var i = 0; i > user.length; i++) {
  if (user === user[i]) {
    found = true;
    alert("Enter");
    break;
  }
}
if (!found) {
  alert("Please write correct user name");
}

// 11. Complete this code to display an alert if a match isn't found.
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//  if (userInput === list[i]) {
//  alert("Match found");
//  matchFound = true;
//  break;
//  }
// };

var userInput = +prompt("Enter Number");

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var matchFound = false;

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    matchFound = true;
    alert("Match found");
    break;
  }
}

if (!matchFound) {
  alert("Enter correct number");
}


// 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
// var secondArr = [1, 2, 3, 4, 5, 6];
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array firstArr.
// In the scope of main loop Code the nested loop. Limit the number
// of nested loops by the number of elements in the array
// secondArr.
// After that concatenate the both loops.
// Expected Output:
// a1
// a2
// a3
// a4
// …
// f6


var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  for (var j = 0; j < secondArr.length; j++) {
    var finalArr = firstArr[i] + secondArr[j];
    console.log(finalArr);
  }
}


// ************************************ 20 Chapters Done ***********************************************