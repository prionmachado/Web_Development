//let btn = document.querySelector("button");
// btn.addEventListener("click", function(event) {
//     console.log(event);
// }); 
// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
// }); 


// Keyboard events
let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log(event);
    console.log(event.code); 
    console.log("Key was pressed");
});
// inp.addEventListener("keyup", function(event) {
//     console.log("Key was released");
// });