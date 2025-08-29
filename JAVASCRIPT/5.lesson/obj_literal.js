// const student = {
//     name : "Prion",
//     age : 18,
//     marks : 75,
//     city : "delhi",
// }; 

// const post = {
//     username : "@prion",
//     Content : "Hello World, This is my #firstpost",
//     likes : 100,
//     reposts : 50,
//     tags: ["#firstpost", "#hello", "#world"] 
// };  

// const classinfo = {
//     aman : {
//         grade : "A",
//         age : 20
//     },
//     prion : {
//         grade : "B",
//         age : 18
//     }
// }; 

// const classinfo2 = [
//     {
//         name : "Aman",
//         grade : "A",
//         age : 20
//     },
//     {
//         name : "Prion",
//         grade : "B",
//         age : 18
//     } 
// ];   

// Guessing game
const max = prompt("Enter the maximum number :");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number :");

while (guess != "quit") { 
    if (guess < random) {
        guess = prompt("Too low! Try again :");
    } else if (guess > random) {
        guess = prompt("Too high! Try again :");
    } 
    else {
        console.log("Congratulations! You guessed the number " + random + " correctly.");
        break;
    }
} 

if (guess === "quit") {
    console.log("You quit the game. The number was " + random + ".");
} 