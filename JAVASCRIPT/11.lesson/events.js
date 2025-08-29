let btns = document.querySelectorAll('button');


// Mouse events 
for(let btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;  // you can't do both at once

    btn.onmouseenter = () => {
        console.log("Mouse entered the button");
    }; 

    btn.addEventListener('click', sayHello);
    btn.addEventListener('click', sayName); 
    btn.addEventListener('dblclick', function(){
        console.log("Button was double clicked");
    });  
}; 

function sayHello() {
    console.log("Hello World");
}; 

function sayName(){
    console.log("Prion");
};  