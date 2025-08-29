// this keyword refers to the object that is executing the current function
const students = {
    name: "John",
    age: 20,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got average marks ${avg}.`);
    }
}

// try and catch
try {
    console.log("This is a try block.");
    console.log(a);
} catch (error) {
    console.log("This is a catch block.");
    console.log(error);
}

// Set Timeout 
console.log("Hi there!");
setTimeout(() => {
    console.log("My world");
}, 4000);  //4 seconds
console.log("Welcome to");

// Set Interval
let id = setInterval(() => {
    console.log("Prion");
}, 2000);  //2 seconds

// clearInterval(id); // to stop the interval


// this with arrow functions
const student = {
    name: "Smith",
    marks: 85,
    prop: this,
    getName() {
        console.loh(this); // this will print the student object
        return this.name;
    },
    getMarks: () => {
        console.log(this); //this will print the parent object scope , not the student object
        return this.marks;
    }
};  