// 1. Alert these following (individually):
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number
// V. Password

alert("Waleed");
alert("Ahmed");
alert("waleed007896@gmail.com");
alert("+92 308 2112124");
alert("Waleedahmed");


// 2. Correct this statement: alert"You're learning JavaScript!";

alert("You're learning JavaScript!");

// 3. Code an alert statement displaying any message you like.
alert("My Name is Waleed Ahmed.");



// Chapter 2 (Variables for string)


//1. Declare any variable in the camelCase format.

var fullName = "Waleed Ahmed";

// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.

var myName;
myName = "waleed Ahmed";
// console.log(myName);


// 3. Declare the variable teamName and Alert your Team name.

let teamName = "Dot Media Team.";
alert(teamName);

// 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.

var bestMan = "Charlie";
bestMan = "Waleed Ahmed";




// Chapter 3 (Variables for numbers)



// 1. Declare a variable “caseQty”

var caseQty;


// 2. Assign to the variable caseQty, which has already been declared, the value 144.

caseQty = 144;


// 3. Rewrite this statement so the variable can be used in a math operation. var num = "9";

var num = 9;

// 4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.

var finalNum;
finalNum = 5 + 36;

// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.


var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;

// Answer = 110;


// 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.

var num = 25;
num = 25 + 25;





// Chapter 4 (Variable names Legal and Illegal)


// 1. Correct this statement.
// var product cost = 3.45;

var productCost = 3.45;


// 2. Rewrite this using camelCase.
// var Nameofband;

var nameOfBand;


// 3. In a single statement declare a legally-named variable and assign a number to it.


var myNum = 155;

// 4. Declare a variable that is a combination of your first and last names. Use camelCase.

var waleedAhmed;


// 5. List the legal and Illegal Variables.

// Legal Variables

var name; // First letter sould be small.
var name1; // you can use number after variable.
var firstName; // Camel Case is Best Practice.
var $nam_e; // $ and _ sign can be used but only these two.
var nameAlert; // Reserved js keywords can be used with combinations.

// ill-legal Variables.

// var 1name; A veriable can't be started from number.
// var #name; special creactors can't be used to declear a veriable. Only($, _).
// var firstname; Always use camel case.
// var alert; Can't declear variable from a Reserved keyword of Js.



// Chapter 5 (Math Expression I)

// 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?

// % (Percentage Give Remainder in JS).


// 2. What is the value of num?

var num = 20 % 6;
// console.log(num)

// The Answer is = 2;


// 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.

var largeNum = 1000 * 2000;


// 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable

var num1 = 224;
var num2 = 123;

var num3 = num1 - num2;

// 5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.

var num = 24 % 5;

// 6. Code an alert that displays the result of a multiplication on 2 numbers.

alert(23 * 25);





// Chapter 6 (Math Expression II)


// 1. Code a short form of x = x + 1; Use either of the two legal expressions.

x = x++;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?

--x;


// 3. var x = 50;
// var y = x++;
// What is the value of y?

// Answer = 50;


// 4. var y = 50;
// var z = --y;
// What is the value of z?

// Answer = 49;


// 5. In a single statement, decrement num and assign its original value to newNum.

var newNum = num--;

// 6. In a single statement add 1 to a variable and assign its original value to another variable.

var number = num++;

// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert

var num = 25;
--num;
alert(num);

// Chapter 7 (Math Expression III)


// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?

calculatedNum = 14;


// 2. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?

calculatedNum = 24;


// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?

calculatedNum = 24;

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?

calculatedNum = 18;



// Note: Try all the above equations yourself.


// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.

var result = (2 + 2) * (4 + 10); // 56


// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.

var result = 2 + (2 * 4) + 10; // 20


// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
// clarified with parentheses, producing .5.

var result = 4 / (2 * 4); // 0.5

// Chapter 8 (Concatenating Text Strings)

// 1. var num = "2" + "2";
// What is the value of num? Include quotation marks.



var num = "2" + "2"; //  Answer: 22



// 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement

message = ("Hello," + "Dolly");
alert(message); // answer: Hello,Dolly


// 3. alert("33" + 3);
// What message displays in the alert box?


alert("33" + 3); // Answer: 333


// 4. Write an alert that displays the concatenation of the two parts of
// "Pakistan Zindabad".

alert("Pakistan " + "Zindabad");

// 5. Write a statement that assigns to a variable the concatenation of
// a string with a number

var name = "waleed" + 24;

// 6. Assign strings to two variables. Then concatenate them and assign
// the result to a third variable

var firstName = "Waleed";
var lastName = " Ahmed";
var fullName = firstName + lastName;



// Chapter 9 (Prompts)


// 1. Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.

var firstName = prompt("Enter first name");

// 2. Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.

prompt("Country", "China");


// 3. Correct this statement
// var yourName = prompt(Enter Your Name");

var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a
// default input.

prompt("This is the message", "The message");


// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.

var firstMsg = "Enter Your Name";
var placeHolder = "Waleed Ahmed";

prompt(firstMsg, placeHolder);



// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.

var myMsg = prompt("Enter Name:", "Ahmed");
alert(myMsg);


// Chapter 10 (if statments);


// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself

var city = "Karachi";

if (city == "Karachi") {
    console.log("The City Of Lights")
}

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.


if (x === y) {
    var z = prompt("Value of z");
}

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")

if (zipcode == "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;

if (x == 15){
    x = 1;
}

// 
// 10 Chapters Done
// 


