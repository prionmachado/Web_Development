let arr = [1, 2, 3, 4, 5];

arr.forEach(function (el) {
    console.log(el);
});
// OR
// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print); 

let arr2 = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 35 }
];

arr2.forEach(function (student) {
    console.log(student.name);
});

// Map method
let num = [1, 2, 3, 4, 5];

let double = num.map(function (el) {
    return el * 2;
});

let students = [
    { name: 'Rion', marks: 89 },
    { name: 'Rita', marks: 92 },
    { name: 'Ravi', marks: 95 }
];

let gpa = students.map(function (stud) {
    return stud.marks / 10;
});

// Filter method
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = nums.filter((el) => {
    return el % 2 == 0;
});

// Every method
let ages = [18, 20, 22, 25, 30];
let allAdults = ages.every((age) => {
    return age >= 18;
});

// Some method
let ages2 = [16, 17, 18, 19, 20];
let someAdults = ages2.some((age) => {
    return age >= 18;
});

// Reduce method
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

let digits = [1, 2, 3, 4, 5];
let max_num = digits.reduce((max, current) => {
    if (max < current) {
        return current;
    } else {
        return max;
    }
    // return Math.max(max, current);
});

// spread
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let name = [...'HelloWorld'];
let combined = [...arr3, ...arr4];
console.log(combined);

// Spread with objects
const data = {
    email: "batman@gmail.com",
    password: "batman123"
};
const datacopy = {
    ...data,
    id: 12879,
    name: "Bruce Wayne",
    age: 30,
    city: "Gotham"
};
console.log(datacopy);

// Rest - Allows a function to accept an indefinite number
//  of arguments and bundle them into an array.
function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
};

function sample(...args) {
    console.log(args);
    console.log(args.length);
};

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr);
}; 

// Destructuring
// with arrays
let names = ["John", "Jane", "Jack","Jackie","Peter"]; 
let [Winner, Runner, ...Others] = names;

//With objects
let person = {
    name: "Bruce",
    age: 30,
    city: "Gotham",
    Goals: ["Freedom","Mastery","Wealth", "Power"],
};
let {name:n, age, city: place = "Mumbai", Goals} = person; 