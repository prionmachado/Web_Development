const express = require('express');
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// app.use((req, res) => {
// console.log(req);
// console.log(req.url);
// console.log('Request received');
// res.send('This is a basic response');
// res.send({
//     message: "This is a JS object response(which will converted and displayed in json",
//     name: "apple",
//     color: "red",
// });
// let code = '<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>'
// res.send(code); 
// }); 

app.get('/', (req, res) => {
    console.log('Request received');
    res.send("You contacted root path");
});

// path parameters
app.get("/:username/:id", (req, res) => {
    console.log('Request received');
    let { username, id } = req.params;
    let htmlstr = `<h1>Welcome to the page of @${username}, my id ${id}</h1>`
    res.send(htmlstr);
});

// query parameters
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("<h1>No search query provided</h1");
    };
    res.send(`<h1>Search results for query: ${q}<h1>`);
    console.log(q);
});

// normal routing path
app.get('/home', (req, res) => {
    console.log('Request received');
    res.send("You contacted home path");
});

// Error
app.use((req, res) => {
    res.status(404).send("404! Page not found");
});  