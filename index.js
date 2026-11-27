// type conversion = same as python, change datatype of value to another

let x = "35";
let y = "5";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//const = variable that cant be changed
const PI = 3.14159; //for raw data like nums as consts it is good practice all caps

document.getElementById("mySubmit").onclick = function(){
    let radius = document.getElementById("myText").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}

// COUNTER:
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++; //increments count by 1.
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--; //increments count by 1.
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0; //increments count by 1.
    countLabel.textContent = count;
}

//Math = built-in object that provides a collection of properties and methods

console.log(Math.PI);
console.log(Math.E);

let a = 3.21;
let d = 56.7
let b;
b = Math.round(b);

console.log(b, typeof b);

console.log(d, typeof d);
d = Math.floor(d);
console.log(d, typeof d); // This was called again so I can see how floor affects it.
// d = Math.trunc(d); -> truncates
// d = Math.pow(x, y); -> x^y
// d = Math.sqrt(x);
// d = Math.log(x); base e by default
// d = Math.sin(x)
// d = Math.cos(x)
// d = Math.tan(x)
// d = Math.abs(x); This gives the absolute value 
// d = Math.sign(x); returns the sign of the value
// d = Math

let mathmax = Math.max(x, y, z); //returns the maximum value.

function logBase(base, value) {
  return Math.log(value) / Math.log(base);
}

console.log(logBase(2, 8));    // Returns 3
console.log(logBase(10, 100)); // Returns 2

//  euler's number

// Used for most front-end...
// There are a lot of like other languages built on top of it, like you might have heard of TS. 
// 0.3 + 0.6 = 0.899999999999 due to issue with binary number addition.
// this is from an issue (or just the way it works) with the way binary numbers are stored. 

// RNG------

let max = 200;
let min = 50;
let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);

const randButton = document.getElementById("randButton");
const randLabel1 = document.getElementById("randLabel1");
const randLabel2 = document.getElementById("randLabel2");
const randLabel3 = document.getElementById("randLabel3");
const randMin = 1;
const randMax = 6;
let randomNum1;
let randomNum2;
let randomNum3;

randButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (randMax)) + randMin;
    randLabel1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random() * (randMax)) + randMin;
    randLabel2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random() * (randMax)) + randMin;
    randLabel3.textContent = randomNum3;
    
    
    // if statements:
    if (randomNum1 == randomNum2 == randomNum3) {
        console.log("Rolled equal");
    } else if (randomNum1 == randomNum2 || randomNum2 == randomNum3 || randomNum1 == randomNum3) {
        console.log("At least 2 are equal");
    } else {
        console.log("No luck");
    }
}

// checked property
const radioVideoSubmitButton = document.getElementById("formatButton");
const hyraxCheckBox = document.getElementById("hyraxCheckBox");
const radioBtn = document.getElementById("radioBtn");
const videoBtn = document.getElementById("videoBtn");
const radVidResult = document.getElementById("radVidResult");
const HyraxResult = document.getElementById("HyraxResult");

radioVideoSubmitButton.onclick = function(){
    if(hyraxCheckBox.checked){
        HyraxResult.textContent = "You are right! Hyraxes...";
    }
    else{
        HyraxResult.textContent = "You are wrong! Hyraxes...";
    }
    if(radioBtn.checked){
        radVidResult.textContent = "You are listening to radio.";
    } else if(videoBtn.checked){
        radVidResult.textContent = "You are watching video.";
    } else{
        radVidResult.textContent = "No media format selected. Radio/Video?";
    }
}

// ternary operator = a shorcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message = age >= 18 ? "Youre an adult!" : "You're not an adult";
console.log(message);
 
let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);