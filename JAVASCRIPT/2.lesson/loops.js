// for (let i=1;i<=10;i++){
//     console.log(i);
// }   

// for (let i=10;i>=1;i--){
//     console.log(i);
// }

// //print odd numbers
// console.log("Odd numbers :-");
// for (let i=1; i<=15 ;i++){
//     if (i%2!=0){
//         console.log(i);
//     }
// } 
// //print even numbers
// console.log("Even numbers :-");
// for (let i=1;i<=15;i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

// //Multiplication table
// let num = parseInt(prompt("Enter a number: "));
// let limit = parseInt(prompt("Enter the limit: ")); //it return string so we need to convert it to int using parseInt
// console.log(`Multiplication table of ${num}:-`);
// for (let i=1;i<=limit;i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }  

//nested loops
// for (let i=1;i<=5;i++){
//     for (let j=1;j<=i;j++){
//         console.log("*");
//     }
//     console.log("\n");
// }  

//guess movie
// const fav_movie = "The Dark Knight";
// let guess = prompt("Guess my favourite movie: ");
// let count = 1;
// let max_attempts = 5;

// while (guess !== fav_movie && guess !== "quit" && count < max_attempts) {
//     guess = prompt("Wrong guess. Try again:");
//     count++;
// }

// if (guess === fav_movie) {
//     console.log("You guessed it right!");
// } else if (guess === "quit") {
//     console.log("You quit!");
// } else {
//     console.log("You've reached the maximum number of attempts.");
// } 

//break
// let i=1;
// while(i<=5){
//     if (i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// } 

//loop with arrays
// let cars = ["bmw","lambo","ferrari","audi"];
// cars.push("mercedes");
// for (let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

//nested loops with nested arrays
// let matrix = [["Prion",2,3],["Sinoy",5,6],["Blaise",8,9]]; 
// for (let i=0;i<matrix.length;i++){
//     console.log(`List ${i}`);
//     for (let j=0;j<matrix[i].length;j++){
//         console.log(matrix[i][j]);
//     }
// } 

//for of loop
// let fruits = ["Apple","Banana","Mango","Orange"];
// for (i of fruits){
//     console.log(i);
// }

// for (char of "apnacollege"){
//     console.log(char);
// }  

//nested for of loops
// let heroes = [
//     ["Batman","superman","wonderwoman"],
//     ["Ironman","Thor","Hulk"],
//     ["Spiderman","Black Panther","Captain America"]
// ];
// for (list of heroes){
//     for (hero of list){
//         console.log(hero);
//     }
// }  