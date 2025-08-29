let text = document.querySelector("#textInput");
let para = document.querySelector("p");
text.addEventListener("input", function(event) {
    console.log(this.value);
    para.innerText = this.value;
}); 