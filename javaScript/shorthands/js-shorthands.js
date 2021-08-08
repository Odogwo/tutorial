

//SOURCE
//https://coderwatch.com/js-shorthands-productivity


//Declaring variables
//You can easily declare/define multiple variables on one line.
//Long version  
let a;   
let b = 1; 
//Shorthand  
let a, b = 1;




//Assigning values to multiple variables
//You can assign values to multiple variables with array destructuring.

//Long version  
x = 1;   
y = 2;   
z = 3; 

//Shorthand  
let [x, y, z] = [1, 2, 3];



//Assigning default value
//You can set default values with the || (OR) operator.
//If the value onn the left side is falsy it will use the one on the right

let finalName;   
let name = getName();   
if(name !== null && name !== undefined && name !== '') {  
    finalName = name;   
} else {  
    finalName = 'Rahul'  
}

// Shorthand  
let finalName = getName() || 'Rahul';


//The ternary operator
//You can write if else statements in one line using the ternary (?:) operator

//Long version  
let points = 70;   
let result;   
if(marks >= 50){  
    result = 'Pass';   
}else{  
    result = 'Fail';   
}

//Shorthand  
let points = 70;   
let result = marks >= 50 ? 'Pass' : 'Fail';


//Template Literals
//Instead os using the + operator to concatenate strings we can use ES6 template literals.

// Long version  
console.log('Hello ' + name +', it is ' + day); 

//Shorthand  
console.log(`Hello ${name}, it is ${day}`);


//Swap two variables
//With arraw destructuring you can swap two variables without using a third one.

let x = 1, y = 2;   
//Long version  
const temp = x;   
x = y;   
y = temp; 

//Shorthand  
[x, y] = [y, x];



//AND(&&) Short circuit evaluation
//You can use the && operator if you want to execute a function if a variable is true.

// Long version  
if (isLoggedin) {   
    redirectToHomepage();   
}

//Shorthand  
isLoggedin && redirectToHomepage();



//Arrow function
//You can write shorter functions using the arrow function syntax

//Long version  
function add(a, b) {  
    return a + b;   
}

// Shorthand  
const add = (a, b) => a + b;


//Multi-line string
//For multiline string instead of using + operator with a new line ecape sequence (\n). 
//We can use usebackticks(``)

// Long version  
console.log('A blog is a discussion or informational website published\n' + 'on the World Wide Web consisting of discrete, often informal diary-style text entries. Posts are typically\n' + 'displayed in reverse chronological order, so that the most recent post\n' + 'appears first, at the top of the web page. Until 2009,\n' + 'blogs were usually the work of a single' ); 

//Shorthand  
console.log(`A blog is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries . Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single`);



//Multiple condition checking
//When checking for multiple values, 
//we can pull all values in an array and use indexOf() / includes() method.


//Long version  
if (value === 1 || value === 'one' || value === 2 || value === 'two') {  
    //Execute code  
}

//Shorthand 1  
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) {  
    //Execute code  
}  
//Shorthand 2  
if ([1, 'one', 2, 'two'].includes(value)) {  
    //Execute code  
}


//String into a number
//You can convert a string to a number by writing a + operator before the string.

// Long version  
let total = parseInt('45');   
let average = parseFloat('421.6'); 

//Shorthand  
let total = +'45';   
let average = +'421.6';


//Object property Assignment
//If the variable name and object key name is the same, 
//then we can just mention variable name in object literals instead of both key and value


let firstname = 'Emma';   
let lastname = 'Turner';   
//Long version  
let obj = {firstname: firstname, lastname: lastname}; 

//shorthand  
let obj = {firstname, lastname};


//Find max and min numbe rin array
//Instead of writing a for loop you cna use the spread operator of Array.reduce().

// Shorthand  
const arr = [2, 8, 15, 4];   
Math.max(...arr); // 15  
Math.min(...arr); // 2


//Exponent Power
//Instead of Math.pow() we can use ** to find the power of a number.

//Long version  
const power = Math.pow(4, 3); // 64

//Shorthand  
const power = 4**3; // 64


//Doouble NOT bitwise operator
//You can use the ~~ instead of Math.floor(). Only works for 32-bit numbers, so use it wisely.

//Long version  
const floor = Math.floor(4.8); // 4

//Shorthand  
const floor = ~~4.8; // 4


//Repeat a string multiple time
//Instead of a for loop you can use the repeat() stringmethod to repeat a string.

//Long version  
let str = '';   
for(let i = 0; i < 5; i ++) {  
    str += 'Hello ';   
}  
console.log(str); // Hello Hello Hello Hello Hello 

//Shorthand  
'Hello '.repeat(5);



//For loop
//We can use the for of or for in instead of a for loop.

let arr = [1, 2, 3, 4];   
//Long version  
for (let i = 0; 1 < arr.length; i++) {  
    console.log(arr[i]);   
}  
//Shorthand  
//for of loop  
for (const val of arr) {  
    console.log(val);   
}  
//for in loop  
for (const index in arr) {  
    console.log(arr[index]);  
}


//Deep clong of multi-level object
//It won't work when you have functions as values, but otherwise feel free to use it.

let obj = {x: 20, y: {z: 30}}; 

//long version  
const makeDeepClone = (obj) => {  
    let newObject = {};   
    Object.keys(obj).map(key => {  
        if(typeof obj[key] === 'object'){  
            newObject[key] = make DeepClone(obj[key]);   
        } else {  
            newObject[key] = obj[key];   
        }  
    });   
    return neObject;   
}  
const cloneObj = makeDeepClone(obj); 

//Shorthand  
const cloneObj = JSON.parse(JSON.stringify(obj));


//Get character from string
//You can use [] operator to get a character from a string.

let str = 'heelloworld';   
//Long version  
str.charAt(1); // e

//Shorthand  
str[1]; // e


//Merging arrays
//Instead of using Array.concat() we can use the rest operator to merge arrays.


let arr1 = [2, 3];   
//Long version  
let arr2 = arr1.concat([4, 5]);   
// [2, 3, 4, 5]

// Shorthand  
let arr2 = [...arr1, 4, 5];   
// [2, 3, 4, 5]