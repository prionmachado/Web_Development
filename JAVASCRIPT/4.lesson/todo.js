let todo = [];

let request = prompt("Please enter your request ");

while(true){
    if (request === "quit"){
        console.log("You quit the app");
        break;
    }
    else if (request === "list"){
        if(todo.length === 0){
            console.log("Your to-do list is empty");
        }else {
            console.log("-------------------------------");
            for(let i = 0; i < todo.length; i++){
                console.log(`${i+1}: ${todo[i]}`);
            }
            console.log("-------------------------------");
        }
    } 
    else if (request === "add"){
        let task = prompt("Enter new todo to add:- ");
        if (task === "") {
            console.log("Task cannot be empty");
        } else {
            todo.push(task);
            console.log("Task added");
        }
    } 
    else if (request === "delete"){
        let index = parseInt(prompt("Enter index of todo to delete"));
        todo.splice(index, 1);
        console.log("Deleted task");
    }
    else{
        console.log("Please enter a valid request");
    }

    request = prompt("Please enter your request ");  
}  