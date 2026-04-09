const express = require('express');
const app = express();
const path = require('path');

let port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views')); // we can run the server from any location

app.get("/", (req, res) => {
    console.log("This is root")
    res.render("home.ejs"); // it will by deafult search in views folder
});

// How to pass data to ejs file
app.get("/rollDice", (req, res) => {
    console.log("Rolling dice....");
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceVal : num });
}); 

app.get("/ig/:username", (req, res) => {
    console.log("Opening instagram profile....");
    let { username } = req.params;
    const instaData = require('./data.json');
    const data = instaData[username];
    if(data) {
        res.render("insta.ejs", { data });
    } 
    else {
        res.render("error.ejs");
    };
}); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});    
