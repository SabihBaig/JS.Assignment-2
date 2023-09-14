// Question:1
var usercity = prompt("where do you live")
if (usercity === "karachi") {
    console.log("Welcome to city of light");
}
else {
    console.log("Sorry no Entry")
}

// Question: 2
var gender = prompt("what is your gender")
if (gender === "male")
    alert("Good Morning Sir")
else if (gender === "female")
    alert("Good Morning Maam")

// Question : 3
var userColour = +prompt("traffic signal")
if (userColour === "Red") {
    console.log("Must Stop");
}
else if (userColour === "Yellow") {
    console.log("Ready to Move");
}
else if (userColour === "Green") {
    console.log("Move now");
}

// Question # 4 
var userFuel = prompt("remaining fuel in car")
if (userFuel === "2.25") {
    console.log("Travel 2 KM more");
}
else {
    console.log("“Please refill the fuel in your car”");
}

// Question # 5
// A
var a = +prompt("what is the variable");
if (++a === 5)
    alert("given condition for variable a is true");

// b
var b = +prompt("what is the variable");
if (b++ === 83) {
    alert("given condition for variable b is true")
}

// c. 
var c = +prompt("what is the variable");
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d.

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

var totalCost = +prompt("laborCost + materialCost")
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// E
var userGuide = prompt("True / False")
if (userGuide === true); {
    alert("true")
}
// f. 
var userGuide = prompt("car")
if (userGuide === "car" < "cat"); {
    alert("car is smaller than cat")
}
// ..
var number = prompt("Enter Your number");

if (number % 2 === 0) {
    console.log("even number");
}
else if (number % 3 === 0) {
    console.log("odd number");
}
else {
    console.log("neither even nor odd number");
}
if (number % number === 0 && number % 2 === 1) {
    console.log("prime number");
    // }

    var num1, num2;
    //num1 = window.prompt("Input the First integer", "0");
    //num2 = window.prompt("Input the second integer", "0");

    if (parseInt(num1, 20) > parseInt(num2, 10)) {
        console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
    }
    else
        if (parseInt(num2, 10) > parseInt(num1, 20)) {
            console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
        }
        else {
            console.log("The values " + num1 + " and " + num2 + " are equal.");
        }

    var number = parseInt(prompt("Enter a number: "));

    // check if number is greater than 0
    if (number > 0) {
        console.log("The number is positive");
    }

    // check if number is 0
    else if (number == 0) {
        console.log("The number is zero");
    }

    // if number is less than 0
    else
        console.log("The number is negative");
}
