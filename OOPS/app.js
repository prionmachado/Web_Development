// Factory functions
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
} 

let pm1 = PersonMaker("adam", 25);
let pm2 = PersonMaker("eve", 25);
           

// // Constructors - doesn't return anything and start with capital letter
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }  

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// // new operator
// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25); 

// Classes

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, I am ${this.name}`)
    }
}

// Inheritance
class Student extends Person { 
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
    
    // Override
    talk(){
        console.log(`Hi, I am Student ${this.name}`)
    }
} 

let s1 = new Student("adam", 25, 95);
let s2 = new Student("eve", 25, 98); 

// Inheritance
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}  

let t1 = new Teacher("sciana", 25, 95);
let t2 = new Teacher("fiana", 25, 98); 
