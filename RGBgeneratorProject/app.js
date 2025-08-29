let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let box = document.querySelector("div");
    let randomColor = generateRandomColor();

    h3.innerText = randomColor;
    box.style.backgroundColor = randomColor;

    console.log("Color updated");
    console.log(this);
});


function generateRandomColor() {
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}; 