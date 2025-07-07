//Global Scope

var a = "I'm var";
let b = "I'm let";
const c = "I'm const";

console.log(a); 
console.log(b); 
console.log(c); 

//Function Scope

function testScope() {
var a = "I am var inside function";
let b = "I am let inside function";
const c = "I am const inside function";

console.log("Inside function:");
console.log(a); 
console.log(b); 
console.log(c); 
}

testScope(); 

console.log("Outside function:");
console.log(a); 
console.log(b); 
console.log(c); 

//Block Scope

if (true) {
var a = "I am var inside block";
let b = "I am let inside block";
const c = "I am const inside block";
  
console.log("Inside block:");
console.log(a); 
console.log(b); 
console.log(c); 
}
  
console.log("Outside block:");
console.log(a); 
console.log(b);
console.log(c); 

//Hoisting with var

console.log(a);

var a = "Hoisted var";

//Hoisting with let and const

console.log(b); 
let b = "This is let";

console.log(c); 
const c = "This is const";

//Re-declaration

var x = 10;
var x = 20; 
console.log(x);

let y = 10;
let y = 20;
console.log(y);

const z = 10;
const z = 20;
console.log(z);

//Re-assignment

var a = 5;
a = 10;
console.log(a);

let b = 20;
b = 30;
console.log(b); 

const c = 40;
c = 50;
console.log(c); 

//Temporal Dead Zone (TDZ)

{
console.log(x); 
let x = 10;
}
  
{
console.log(y);
const y = 20;
}

//When to use var, let, and const:

function oldWay() {
var message = "This is using var";
console.log(message);
}
  
oldWay();


let count = 0;

for (let i = 0; i < 3; i++) {
count += 1;
}
console.log(count);


const pi = 3.14159;
console.log(pi); 

//String Interpolation


let firstName = "Ali";
let lastName = "Khan";


let fullName = `${firstName} ${lastName}`;

console.log(fullName); 

//Multi-line Strings 


let address = `
House #12,
Block B, Garden Town,
Lahore, Pakistan
`;

console.log(address);

//Simple Expressions


let num1 = 7;
let num2 = 3;


let result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

console.log(result); 


//Function Calls

function multiply(a, b) {
return a * b;
}
  

let result = `The product of 4 and 5 is ${multiply(4, 5)}.`;
  
console.log(result); // Output: The product of 4 and 5 is 20.
  

//Creating a Tagged Template


function tag(strings, ...values) {
console.log("Template strings:", strings);
console.log("Inserted values:", values);
}
  
let name = "Sara";
let age = 22;
  
`My name is ${name} and I am ${age} years old.`;
  

//Formatting


function toUpper(strings, ...values) {
let result = "";
  
for (let i = 0; i < strings.length; i++) {
result += strings[i];
if (i < values.length) {
result += String(values[i]).toUpperCase(); // Uppercase the inserted value
}
}
  
return result;
}
  
let city = "karachi";
let country = "pakistan";
  
let output = toUpper`I live in ${city}, ${country}.`;
  
console.log(output);

//Conditional Logic

let hour = 15;

let message = `Good ${hour < 12 ? "morning" : "afternoon"}!`;

console.log(message);

//Loops within Template Literals


let items = ["Milk", "Bread", "Eggs", "Butter"];

let htmlList = `
<ul>
${items.map(item => `<li>${item}</li>`).join("\n  ")}
</ul>
`;

console.log(htmlList);

//Escaping Backtick


let message = `This is a backtick character: \``;

console.log(message); 


//Nested Template Literals


let users = [
{ name: "Ali", age: 25 },
{ name: "Sara", age: 30 },
{ name: "Ahmed", age: 28 }
];
  

let table = `
<table border="1">
<tr>
<th>Name</th>
<th>Age</th>
</tr>
${users.map(user => `
<tr>
<td>${user.name}</td>
<td>${user.age}</td>
</tr>
`).join("")}
</table>
`;
  
console.log(table);

//Simple Condition


let age = 17;

let canVote = age >= 18 ? "Yes" : "No";

console.log(`Can vote? ${canVote}`);

//Even or Odd

let number = 9;

let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

console.log(`The number ${number} is ${evenOrOdd}.`); 


//Grade Evaluation


let score = 82;

let grade = score >= 90 ? "A" :
score >= 80 ? "B" :
score >= 70 ? "C" :
score >= 60 ? "D" : "F";

console.log(`Your grade is: ${grade}`); 


//Login Status


let isLoggedIn = false;

let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

console.log(statusMessage); 


//Discount Eligibility


let isMember = true;
let purchaseAmount = 150;

let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;

console.log(`Discount: Rs. ${discount}`); 


//Determine Max Value


function maxValue(a, b) {
return a > b ? a : b;
}
  
let result = maxValue(10, 25);
  
console.log(`The larger number is: ${result}`); 


//Greeting Message


function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, guest!";
}
  
console.log(greet("Amina"));
console.log(greet(""));
console.log(greet());


//Mapping Values


let numbers = [1, 2, 3, 4, 5];

let modified = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);

console.log(modified); 


//Filtering Values


let words = ["cat", "lion", "sun", "apple", "go"];

let longWords = words.filter(word => word.length > 3);

console.log(longWords); 


//Copying an Array


let originalArray = [1, 2, 3, 4];

let copiedArray = [...originalArray];

console.log("Original:", originalArray); 
console.log("Copied:  ", copiedArray); 

console.log(originalArray === copiedArray); 


//Merging Arrays


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];

console.log("Merged Array:", mergedArray); 


//Adding Elements to an Array


let numbers = [10, 20, 30];

let updatedArray = [5, ...numbers, 40];

console.log("Updated Array:", updatedArray); 


//Copying an Object


let originalObject = {
name: "Ali",
age: 25,
city: "Lahore"
};
  
let copiedObject = { ...originalObject };
  
console.log("Original Object:", originalObject);
console.log("Copied Object:  ", copiedObject);

console.log(originalObject === copiedObject);

//Merging Objects

let object1 = {
name: "Ali",
age: 25
};
  
let object2 = {
age: 30,            
city: "Karachi"
};
  
let mergedObject = { ...object1, ...object2 };

console.log("Merged Object:", mergedObject);

//Updating Object Properties


let user = {
name: "Sara",
age: 28,
email: "oldemail@example.com"
};
  

let updatedUser = {
...user,                  
email: "newemail@example.com", 
address: "Karachi, Pakistan"   
};
  
console.log("Updated User:", updatedUser);



  










  

