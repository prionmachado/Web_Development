let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // when submit the form will prevent it from opening a new page 
    // alert('Form submitted');

    let user = document.querySelector("#user");
    let pass = this.elements[1]; 

    // Extracting data from forms 
    console.log(user.value); 
    console.log(pass.value); 

    // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});  

let user = document.querySelector("#user"); 

user.addEventListener("change", function(event) {
    console.log("change event"); 
    console.log("Final value: ", this.value);
});

user.addEventListener("input", function(event) {
    console.log("input event"); 
    console.log("Final value: ", this.value);
}); 