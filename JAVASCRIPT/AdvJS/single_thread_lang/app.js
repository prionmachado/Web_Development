function hello(){
    console.log("Hello");
};
function demo(){
    hello();
};
demo();

function one(){
    return 1;
};
function two(){
    return one() + one();
};
function three(){
    let ans = two() + one();
    console.log(ans);
}; 

three(); 

// Js is single threaded language
// synchronous nature
// Callbacks makes it asynchronous nature 