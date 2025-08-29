let btn1 = document.querySelector("#added");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let clearBtn = document.querySelector("#clear");

btn1.addEventListener("click", function () {
    if (input.value === "") {
        alert("Please enter a task to add.");
        return;
    };
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    console.log(input.value);
    input.value = "";

    let button = document.createElement("button");
    button.innerText = "Delete Task";
    button.classList.add("delete");
    li.appendChild(button);
});

// Event delegation
ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        if (event.target.classList.contains("delete")) {
            let li = event.target.parentElement;
            ul.removeChild(li);
        };
        console.log("Task Deleted");
    };
}); 

clearBtn.addEventListener("click", function () {
    let items = ul.querySelectorAll("li");
    for (let item of items) {
        ul.removeChild(item);
    }
    console.log("All tasks cleared");
});
