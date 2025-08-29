console.dir(document.getElementsByClassName("oldImg")[0]);
console.dir(document.getElementsByClassName("oldImg")[1]);
console.dir(document.getElementsByClassName("oldImg")[2]);

console.dir(document.getElementById("description"));

console.dir(document.getElementsByTagName("P"));

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg")); 
console.dir(document.querySelector("div a"));  
console.dir(document.querySelectorAll("div a")[0].innerHTML);  

//Visible properties(innerHTML, innerText, textContent)
console.dir(document.querySelector("p").innerHTML);
console.dir(document.querySelector("p").innerText);
console.dir(document.querySelector("p").textContent); 

let heading = document.querySelector("h1");
heading.innerHTML = "<u>Spider Man</u>";
// What if you don't know what's in the heading
// heading.innerHTML = `<u>${heading.innerText}</u>`;
console.dir(heading.style);  //it only display inline styles
// console.dir(heading.style.color = "red");

console.dir(document.querySelector("img").getAttribute("id")); 

console.dir(document.querySelector("img").classList); 

console.dir(document.querySelector("img").previousElementSibling.style.color = "red");  

//append
let newPara = document.createElement('p');
newPara.innerHTML = "This is a new paragraph. ";
newPara.append("This is a new text");
document.querySelector(".box").appendChild(newPara);   

// prepend
let btn = document.createElement('button');
btn.innerHTML = "Prepend !!!";
document.querySelector(".box").prepend(btn); 

// insertAdjacentElement
// beforebegin
let btn2 = document.createElement('button');
btn2.innerHTML = "Before begin!!!"; 
document.querySelector("p").insertAdjacentElement("beforebegin", btn2);

// afterbegin
let btn3 = document.createElement('button');
btn3.innerHTML = "After begin!!!"; 
document.querySelector("p").insertAdjacentElement("afterbegin", btn3);

// beforeend
let btn4 = document.createElement('button');
btn4.innerHTML = "Before End!!!"; 
document.querySelector("p").insertAdjacentElement("beforeend", btn4);

// after end
let btn5 = document.createElement('button');
btn5.innerHTML = "After End!!!"; 
document.querySelector("p").insertAdjacentElement("afterend", btn5);


