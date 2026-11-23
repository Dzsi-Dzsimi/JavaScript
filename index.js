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
let b;
b = Math.round(b);
 