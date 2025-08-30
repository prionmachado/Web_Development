// Callback hell
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("red", 1000, () => {
//                 changeColor("red", 1000);
//             });
//         });
//     });
// });

// // callback hell
// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// };
// // If first data is saved then only go to the second data or function is terminated
// saveToDB(
//     "Prion",
//     () => {
//         console.log("Success : Your data was saved");
//         saveToDB(
//             "Hello World",
//             () => {
//                 console.log("Success2 : Data2 saved");
//                 saveToDB(
//                     "How are you",
//                     () => {
//                         console.log("Success3 : data3 saved")
//                     },
//                     () => {
//                         console.log("Failure3 : Data3 not saved");
//                     }
//                 )
//             },
//             () => {
//                 console.log("Failure2 : Data2 not saved");
//             }
//         );
//     },
//     () => {
//         console.log("Failure : Weak connection. Data not saved.");
//     }
// );


// To save us from this hell , promises comes
// The Promises object represents the evantual completion(or failure)
// of an asynchromous operation and its resulting value
// resolve and reject of Promise

// then() - if the work is done successfully and
//          after that you to do something , use then()
// catch() - If the work failed and you want to do
//           something after that then use catch()

// Promises syntax
function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve(`Success : ${data} was saved`);
        }
        else {
            reject(`Failure : ${data} was not saved`);
        }
    });
};
saveToDB("Hello")
.then((result) => {
    console.log(result);
    return saveToDB("Prion")
})
.then((result) => {
    console.log(result);
    return saveToDB("Machado");
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

// Using async keyword
// Async function returns promises so we can use then() and catch()
async function greet(){    
    // throw "404 page not found";  // throws an error
    return "Hello!"
};

greet()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
// greet();

// let demo = async () => {    // using async in arrow function
//     return 5;
// };

// await keyword
function getnum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve("Success");
        }, 1000);
    });
};
async function demo() {
    await getnum();
    await getnum();
    await getnum();
}; 
// demo();

// Using Promise, async and await
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(`Changed to ${color}`);
        }, delay);
    });
};

async function demo2() {
    try {
        await changeColor("red", 1000)
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    }
    catch (error) {
        console.log(error);
    };
};
// demo2(); 