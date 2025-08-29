let a = 30;  // global variable

function hello() {
    let b = 20;  // local variable
    console.log("Hello, world!");
    console.log("Global variable a:", a);  // can access global variable
    console.log("Local variable b:", b);
}

// console.log(b);  // This will throw an error because b is not defined outside the function

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}

outerFunc();