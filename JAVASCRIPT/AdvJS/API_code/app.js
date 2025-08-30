// let jsonRes = '{"fact":"After humans, mountain lions have the largest range of any mammal in the Western Hemisphere.","length":92}';
// console.log(jsonRes);

// let validRes = JSON.parse(jsonRes); 
// console.log(validRes.fact);

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let url3 = "https://icanhazdadjoke.com";

// async function getFacts() {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data.fact);

//         let response2 = await fetch(url);
//         let data2 = await response2.json();
//         console.log(data2.fact);
//     }
//     catch (error) {
//         console.log(error);
//     }
// };

// Using Axios
// we don't have to fetch the url and convert the data in json
// Axios can do that all in one line 

// Made cat facts app, give you facts about cats
async function getFacts() {
    try {
        let response = await axios.get(url);  // fetch + json
        return response.data.fact;
    }
    catch (error) {
        console.log(error);
        return "No fact";
    }
};
let btn = document.querySelector("#cat");
btn.addEventListener("click", async () => {
    let p = document.querySelector("#fact");
    let fact = await getFacts();
    p.innerText = fact;
});

// Made an app that shows cute dogs pictures
async function getDogsImage() {
    try {
        let response = await axios.get(url2);
        return response.data.message;
    }
    catch (error) {
        console.log(error);
        return "No fact";
    }
};
let btn2 = document.querySelector("#dog");
btn2.addEventListener("click", async () => {
    let img = document.querySelector("#image");
    let imgLink = await getDogsImage();
    img.setAttribute("src", imgLink);
});

// Made an app that tells you jokes
async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };//this api was returning HTML instead of json so we added header
        let response = await axios.get(url3, config); // add the header into the response, it will return json 
        return response.data.joke;
    }
    catch (error) {
        console.log(error);
        return "No fact";
    }
};
let btn3 = document.querySelector("#joke");
btn3.addEventListener("click", async () => {
    let para = document.querySelector("#funny");
    let jokes = await getJokes();
    para.innerText = jokes;
});

// Different approach of doing the same things above(not recommended) 
// fetch(url)
// .then((response) =>{
//     return response.json();
// })
// .then((data) => {
//     console.log("Data1 : ",data.fact);
//     console.log("Length : ",data.length);
//     return fetch(url);
// })
// .then((response2) => {
//     return response2.json();
// })
// .then((data2) => {
//     console.log("Data2 : ",data2.fact);
//     console.log("Length : ",data2.length);
// })
// .catch((error) => {
//     console.log(error);
// }); 


// Query Strings
// Search your college 
let url4 = "http://universities.hipolabs.com/search?";
let btn4 = document.querySelector("#result");

// There are some mistakes in these code
async function getCollegesByState(country, state) {
    try {
        let response = await axios.get(url4 + `country=${country}&state-province=${state}`);
        return response.data;
    }
    catch (error) {
        return [];
    }
};
btn4.addEventListener("click", async () => {
    let countryInput = document.querySelector("#countryInput");
    let stateInput = document.querySelector("#stateInput");

    let clg = await getCollegesByState(countryInput.value, stateInput.value);
    showClg(clg);

    countryInput.value = "";
    stateInput.value = "";
});
function showClg(colleges) {
    let list = document.querySelector("#list");
    list.innerHTML = "";

    if (colleges.length === 0) {
        let li = document.createElement("li");
        li.innerText = "No colleges found!";
        list.appendChild(li);
        return;
    }

    for (let college of colleges) {
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
};  