const express = require('express');
const multer = require("multer"); // for real uploads not needed here
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

const upload = multer({ dest: path.join(__dirname, "assets/"), });
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "Ananya Pandey",
        content: "I am the new sensation of Bollywood",
        image: "/assets/ananya.webp"
    },
    {
        id: uuidv4(),
        username: "Hrithik Roshan",
        content: "I am the Greek God of Bollywood",
        image: "/assets/hrithik.jpg"
    },
    {
        id: uuidv4(),
        username: "Shah Rukh Khan",
        content: "I am the king of Bollywood",
        image: "/assets/shahrukh.jpg"
    },
    {
        id: uuidv4(),
        username: "Deepika Padukone",
        content: "Grace and strength define me.",
        image: "/assets/deepika.jpg"
    },
    {
        id: uuidv4(),
        username: "Ranbir Kapoor",
        content: "Acting runs in my blood.",
        image: "/assets/ranbir.jpg"
    },
    {
        id: uuidv4(),
        username: "Alia Bhatt",
        content: "Dream big, stay humble.",
        image: "/assets/alia.webp"
    },
    {
        id: uuidv4(),
        username: "Katrina Kaif",
        content: "Hard work never fails.",
        image: "/assets/katrina.jpg"
    }
];

// all the posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
// and then push it to posts section
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// Edit the post
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).send("Post not found");
    res.render("edit.ejs", { post });
});
// and then push the new post
app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const newContent = req.body.content;
    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).send("Post not found");
    post.content = newContent;
    res.redirect("/posts");
});

// delete post
app.delete("/posts/:id", (req, res) => {
    let id = req.params.id;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
});

// show posts in detail
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).send("Post not found");
    res.render("show.ejs", { post });
});


//listening to port
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 