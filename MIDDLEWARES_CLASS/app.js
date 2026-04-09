const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");

// our first middleware
// app.use((req, res, next) => {
//     console.log("Hi, i am a middleware");
//     next();
// });

// middleware logger
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

// api token
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess") {
        next();
    }
    else {
        throw new ExpressError("ACCESS DENIED", 401);
    }  
};  
app.get("/api", checkToken, (req, res) =>{
    res.send("data");
});

//Error handling middleware
app.get("/error", (req, res) => {
    abcd = abcd;
});
app.use((err, req, res, next) => {
    let { statusCode=500, message = "Something went wrong" } = err;  // default code and message
    res.status(statusCode).send(message);
    // next(err);  // calling error handling middlewares
}); 

// Handling Async Errors
// go to mongo2 folder and check index.js for async error handling code

// root path
app.get("/", (req, res) => {
    res.send("Hi, i am root");
});

// listening on port 
app.listen(port, () => {
    console.log("server listening to port 8080");
});

// 404
app.use((req, res) => {
    res.status(404).send("Page Not Found");
}); 