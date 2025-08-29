function hello(){
    console.log("Hello, world!");
} 

hello();

function sum(a,b){
    return a + b;
}

console.log(sum(5, 10));


//function expression
let mul = function(a, b) {
    return a * b;
}

console.log(mul(5, 10)); 

mul = function(a, b) {   // modified function, you can change the function expression
    return a * b * 2; 
}
console.log(mul(5, 10)); 


// higher order function
//example
function multipleGreet(func,n){
    for(let i = 0; i < n; i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}

multipleGreet(greet, 3); 

//example 2
function oddEvenTest(request){
    if(request=="odd"){
        return function(n) {
            console.log(n % 2 !== 0);
        };
    } else if(request=="even"){
        return function(n) {
            console.log(n % 2 === 0);
        };
    }
    else {
        console.log("Invalid request");
    }
} 

oddEvenTest("odd")(5);  


//Methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand
    // add(a, b) {
    //     return a + b;
    // },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            console.log("Cannot divide by zero");
            return null;
        }
        return a / b;
    }
}; 

// Arrow functions
const add = (a, b) => {
    console.log(a + b);
}; 

// Implicit return in arrow functions
const multiply = (a, b) => a * b;  

// Default parameters
const greetings = (name = "Guest") => {
    console.log(`Hello, ${name}!`);
}; 